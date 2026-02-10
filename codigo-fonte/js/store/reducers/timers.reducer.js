import { TIMERS_TYPES } from "../types/timers.types.js";

export const timersReducer = (state, action) => {
  switch (action.type) {
    case TIMERS_TYPES.ADD:
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };

    case TIMERS_TYPES.UPDATE:
      return {
        ...state,
        timers: state.timers.map((timer) =>
          timer.id === action.payload.id
            ? { ...timer, ...action.payload }
            : timer
        ),
      };

    case TIMERS_TYPES.DELETE:
      return {
        ...state,
        timers: state.timers.filter((timer) => timer.id !== action.payload),
      };

    default:
      return state;
  }
};
