import { AuthActions } from "./auth.actions.js";
import { UsuarioActions } from "./usuario.actions.js";
import { EventosActions } from "./eventos.actions.js";
import { TimersActions } from "./timers.actions.js";
import { EventosRecorrenteActions } from "./eventosRecorrente.actions.js";
import { CategoriasActions } from "./categorias.actions.js";

export const Actions = {
  updateState: (newState) => ({
    type: "UPDATE_STATE",
    payload: {
      __updateState: true,
      data: newState,
    },
  }),

  auth: AuthActions,
  usuario: UsuarioActions,
  eventos: EventosActions,
  timers: TimersActions,
  eventosRecorrente: EventosRecorrenteActions,
  categorias: CategoriasActions,
};
