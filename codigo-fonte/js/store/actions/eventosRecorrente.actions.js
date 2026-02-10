import { EVENTOS_RECORRENTE_TYPES } from "../types/eventosRecorrente.types.js";

export const EventosRecorrenteActions = {
  add: (data) => {
    return {
      type: EVENTOS_RECORRENTE_TYPES.ADD,
      payload: data,
    };
  },
  update: (data) => {
    return {
      type: EVENTOS_RECORRENTE_TYPES.UPDATE,
      payload: data,
    };
  },
  delete: (id) => {
    return {
      type: EVENTOS_RECORRENTE_TYPES.DELETE,
      payload: id,
    };
  },
};
