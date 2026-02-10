export const loggerMiddleware = (event, state) => {
  console.group(`🎯 Event: ${event.type}`);
  console.log("📦 Payload:", event.payload);
  console.log("⏰ Timestamp:", event.timestamp);
  console.log("📊 Current State:", state);
  console.groupEnd();

  return event;
};

export const persistenceMiddleware = (event, state) => {
  if (event.payload?.__updateState) {
    localStorage.setItem("appState", JSON.stringify(state));
  }

  return event;
};
