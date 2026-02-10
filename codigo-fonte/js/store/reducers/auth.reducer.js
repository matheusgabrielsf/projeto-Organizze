import { AUTH_TYPES } from "../types/auth.types.js";

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_TYPES.LOGIN:
      return {
        ...state,
        auth: {
          ...action.payload,
        },
      };

    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        auth: null,
      };

    default:
      return state;
  }
};
