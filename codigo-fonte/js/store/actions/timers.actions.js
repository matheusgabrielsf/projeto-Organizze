import { TIMERS_TYPES } from "../types/timers.types.js";

export const TimersActions = {
  add: (data) => {
    return {
      type: TIMERS_TYPES.ADD,
      payload: data,
    };
  },
  update: (data) => {
    return {
      type: TIMERS_TYPES.UPDATE,
      payload: data,
    };
  },
  delete: (id) => {
    return {
      type: TIMERS_TYPES.DELETE,
      payload: id,
    };
  },
};
