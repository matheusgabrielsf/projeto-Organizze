import { CATEGORIAS_TYPES } from "../types/categorias.types.js";

export const CategoriasActions = {
  add: (data) => {
    return {
      type: CATEGORIAS_TYPES.ADD,
      payload: data,
    };
  },
  update: (data) => {
    return {
      type: CATEGORIAS_TYPES.UPDATE,
      payload: data,
    };
  },
  delete: (id) => {
    return {
      type: CATEGORIAS_TYPES.DELETE,
      payload: id,
    };
  },
};
