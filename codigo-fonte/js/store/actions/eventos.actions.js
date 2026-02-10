import { EVENTOS_TYPES } from "../types/eventos.types.js";

export const EventosActions = {
  add: (data) => {
    const id = { ...data, id: data.id || Date.now().toString()};

    return {
      type: EVENTOS_TYPES.ADD,
      payload: id,
    };
  },

  update: (data) => {
    if (!data.id) {
      throw new Error("É necessário passar o ID do evento para atualizar.");
    }

    return {
      type: EVENTOS_TYPES.UPDATE,
      payload: data,
    };
  },
  delete: (id) => {
    return {
      type: EVENTOS_TYPES.DELETE,
      payload: id,
    };
  },
};
