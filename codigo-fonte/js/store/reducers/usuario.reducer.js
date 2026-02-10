import { USUARIO_TYPES } from "../types/usuario.types.js";

export const usuarioReducer = (state, action) => {
  switch (action.type) {
    case USUARIO_TYPES.ADD:
      return {
        ...state,
        usuarios: [...state.usuarios, action.payload],
      };

    case USUARIO_TYPES.UPDATE:
      return {
        ...state,
        usuarios: state.usuarios.map((usuario) =>
          usuario.id === action.payload.id
            ? { ...usuario, ...action.payload }
            : usuario
        ),
      };

    case USUARIO_TYPES.DELETE:
      return {
        ...state,
        usuarios: state.usuarios.filter(
          (usuario) => usuario.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
