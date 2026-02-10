import { EVENTOS_TYPES } from "../types/eventos.types.js";

export const eventosReducer = (state, action) => {
  switch (action.type) {
    case EVENTOS_TYPES.ADD:
      return {
        ...state,
        eventos: [...state.eventos, action.payload],
      };

    case EVENTOS_TYPES.UPDATE:
      return {
        ...state,
        eventos: state.eventos.map((evento) =>
          evento.id === action.payload.id
            ? { ...evento, ...action.payload }
            : evento
        ),
      };

    case EVENTOS_TYPES.DELETE:
      return {
        ...state,
        eventos: state.eventos.filter((evento) => evento.id !== action.payload),
      };

    default:
      return state;
  }
};
