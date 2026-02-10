import { EventStore } from "./event-store.js";
import { loggerMiddleware, persistenceMiddleware } from "./middleware.js";
import {
  authReducer,
  usuarioReducer,
  eventosReducer,
  timersReducer,
  eventosRecorrenteReducer,
  categoriasReducer,
} from "./reducers/index.js";
import { AUTH_STATE_UPDATED, AUTH_TYPES } from "./types/auth.types.js";
import { USUARIO_STATE_UPDATED, USUARIO_TYPES } from "./types/usuario.types.js";
import { EVENTOS_STATE_UPDATED, EVENTOS_TYPES } from "./types/eventos.types.js";
import { TIMERS_STATE_UPDATED, TIMERS_TYPES } from "./types/timers.types.js";
import {
  EVENTOS_RECORRENTE_STATE_UPDATED,
  EVENTOS_RECORRENTE_TYPES,
} from "./types/eventosRecorrente.types.js";
import {
  CATEGORIAS_STATE_UPDATED,
  CATEGORIAS_TYPES,
} from "./types/categorias.types.js";

const initialState = {
  usuarios: [],
  auth: null,
  eventos: [],
  timers: [],
  eventosRecorrente: [],
  categorias: [],
};

export const appStore = new EventStore(initialState);

appStore.addMiddleware(loggerMiddleware);
appStore.addMiddleware(persistenceMiddleware);

// Registrando reducer de auth
Object.entries(AUTH_TYPES).forEach(([_event, handler]) => {
  appStore.subscribe(handler, (event, state) => {
    const newState = authReducer(state, event);

    if (newState !== state) {
      appStore.setState(newState, AUTH_STATE_UPDATED);
    }
  });
});

// Registrando reducer de usuario
Object.entries(USUARIO_TYPES).forEach(([_event, handler]) => {
  appStore.subscribe(handler, (event, state) => {
    const newState = usuarioReducer(state, event);

    if (newState !== state) {
      appStore.setState(newState, USUARIO_STATE_UPDATED);
    }
  });
});

// Registrando reducer de eventos
Object.entries(EVENTOS_TYPES).forEach(([_event, handler]) => {
  appStore.subscribe(handler, (event, state) => {
    const newState = eventosReducer(state, event);

    if (newState !== state) {
      appStore.setState(newState, EVENTOS_STATE_UPDATED);
    }
  });
});

// Registrando reducer de timers
Object.entries(TIMERS_TYPES).forEach(([_event, handler]) => {
  appStore.subscribe(handler, (event, state) => {
    const newState = timersReducer(state, event);

    if (newState !== state) {
      appStore.setState(newState, TIMERS_STATE_UPDATED);
    }
  });
});

// Registrando reducer de eventos recorrentes
Object.entries(EVENTOS_RECORRENTE_TYPES).forEach(([_event, handler]) => {
  appStore.subscribe(handler, (event, state) => {
    const newState = eventosRecorrenteReducer(state, event);

    if (newState !== state) {
      appStore.setState(newState, EVENTOS_RECORRENTE_STATE_UPDATED);
    }
  });
});

// Registrando reducer de categorias
Object.entries(CATEGORIAS_TYPES).forEach(([_event, handler]) => {
  appStore.subscribe(handler, (event, state) => {
    const newState = categoriasReducer(state, event);

    if (newState !== state) {
      appStore.setState(newState, CATEGORIAS_STATE_UPDATED);
    }
  });
});
