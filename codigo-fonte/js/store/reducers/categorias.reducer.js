import { CATEGORIAS_TYPES } from "../types/categorias.types.js";

export const categoriasReducer = (state, action) => {
  switch (action.type) {
    case CATEGORIAS_TYPES.ADD:
      return {
        ...state,
        categorias: [...state.categorias, action.payload],
      };

    case CATEGORIAS_TYPES.UPDATE:
      return {
        ...state,
        categorias: state.categorias.map((categoria) =>
          categoria.id === action.payload.id
            ? { ...categoria, ...action.payload }
            : categoria
        ),
      };

    case CATEGORIAS_TYPES.DELETE:
      return {
        ...state,
        categorias: state.categorias.filter(
          (categoria) => categoria.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
