import { AUTH_TYPES } from "../types/auth.types.js";

export const AuthActions = {
  login: (data) => {
    return {
      type: AUTH_TYPES.LOGIN,
      payload: {
        idCadastro: data.idCadastro,
        nome: data.nome,
        email: data.email,
      },
    };
  },

  logout: () => ({
    type: AUTH_TYPES.LOGOUT,
    payload: null,
  }),
};
