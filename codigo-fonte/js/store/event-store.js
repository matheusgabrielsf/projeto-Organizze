export class EventStore {
  constructor(initialState = {}) {
    this.state = { ...initialState };
    this.listeners = new Map(); // Map<eventType, Set<callback>>
    this.globalListeners = new Set();
    this.middleware = [];
  }

  subscribe(eventType, callback) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }

    this.listeners.get(eventType).add(callback);

    return () => {
      this.listeners.get(eventType)?.delete(callback);
    };
  }

  subscribeGlobal(callback) {
    this.globalListeners.add(callback);

    return () => {
      this.globalListeners.delete(callback);
    };
  }

  dispatch(eventType, payload = null) {
    const event = {
      type: eventType,
      payload,
      timestamp: new Date().toISOString(),
      previousState: { ...this.state },
    };

    // Aplica middleware
    let processedEvent = event;
    for (const middleware of this.middleware) {
      processedEvent = middleware(processedEvent, this.state);
    }

    // Atualiza o estado se o payload for um objeto de estado
    if (payload && typeof payload === "object" && payload.__updateState) {
      this.state = { ...this.state, ...payload.data };
      delete processedEvent.payload.__updateState;
    }

    // Notifica listeners específicos
    const listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.forEach((callback) => {
        try {
          callback(processedEvent, this.state);
        } catch (error) {
          console.error(`Erro no listener para ${eventType}:`, error);
        }
      });
    }

    // Notifica listeners globais
    this.globalListeners.forEach((callback) => {
      try {
        callback(processedEvent, this.state);
      } catch (error) {
        console.error("Erro no listener global:", error);
      }
    });

    return processedEvent;
  }

  setState(newState, eventType = "STATE_UPDATED") {
    const oldState = { ...this.state };
    this.state = { ...this.state, ...newState };

    this.dispatch(eventType, {
      __updateState: true,
      data: newState,
      oldState,
    });
  }

  getState() {
    return { ...this.state };
  }

  addMiddleware(middlewareFn) {
    this.middleware.push(middlewareFn);
  }

  clear() {
    this.listeners.clear();
    this.globalListeners.clear();
  }
}
