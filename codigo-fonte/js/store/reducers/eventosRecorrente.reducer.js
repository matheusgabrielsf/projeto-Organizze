import { EVENTOS_RECORRENTE_TYPES } from "../types/eventosRecorrente.types.js";

export const eventosRecorrenteReducer = (state, action) => {
  switch (action.type) {
    case EVENTOS_RECORRENTE_TYPES.ADD:
      return {
        ...state,
        eventosRecorrente: [...state.eventosRecorrente, action.payload],
      };

    case EVENTOS_RECORRENTE_TYPES.UPDATE:
      return {
        ...state,
        eventosRecorrente: state.eventosRecorrente.map((evento) =>
          evento.id === action.payload.id
            ? { ...evento, ...action.payload }
            : evento
        ),
      };

    case EVENTOS_RECORRENTE_TYPES.DELETE:
      return {
        ...state,
        eventosRecorrente: state.eventosRecorrente.filter(
          (evento) => evento.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
