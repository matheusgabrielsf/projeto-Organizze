import { USUARIO_TYPES } from "../types/usuario.types.js";

export const UsuarioActions = {
  add: (data) => {
    return {
      type: USUARIO_TYPES.ADD,
      payload: data,
    };
  },
  update: (data) => {
    return {
      type: USUARIO_TYPES.UPDATE,
      payload: data,
    };
  },
  delete: (id) => {
    return {
      type: USUARIO_TYPES.DELETE,
      payload: id,
    };
  },
};
