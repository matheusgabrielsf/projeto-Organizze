import { appStore } from "./store/app-store.js";
import { TIMERS_TYPES } from "./store/types/timers.types.js";
import { timeToSeconds } from "./helpers/timeToSeconds.js";

export const executeTimer = () => {
  let timers = [...appStore.getState().timers];

  appStore.subscribe(TIMERS_TYPES.UPDATE, (_event, state) => {
    timers = state.timers;
  });

  setInterval(() => {
    timers.forEach((timer) => {
      if (timer.status === "ANDAMENTO") {
        const newSeconds = timer.segundosRestantes - 1;

        if (newSeconds <= 0) {
            Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                new Notification("Timer Finalizado!", { 
                  body: `O ciclo de ${timer.ciclo === "DURACAO" ? "duração" : "descanso"} do timer "${timer.nome}" foi concluído.` 
                });
              }
            });


          appStore.dispatch(TIMERS_TYPES.UPDATE, {
            ...timer,

            status: "PAUSADO",
            ciclo: timer.ciclo === "DURACAO" ? "DESCANSO" : "DURACAO",
            segundosRestantes:
              timer.ciclo === "DURACAO"
                ? timeToSeconds(timer.descanso)
                : timeToSeconds(timer.duracao),
          });

          return;
        }

        appStore.dispatch(TIMERS_TYPES.UPDATE, {
          ...timer,
          segundosRestantes: newSeconds >= 0 ? newSeconds : 0,
        });
      }
    });
  }, 1000);
};
