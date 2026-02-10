import { appStore } from "./store/app-store.js";
import { Actions } from "./store/actions/index.js";
import "../components/header/index.js";
import "../components/footer/index.js";
import "../components/calendario/index.js";
import "../components/timer/index.js";
import { executeTimer } from "./timer.js";
import { executeEvento } from "./evento.js";
import { executeEventoRecorrente } from "./eventoRecorrente.js";

// Disponibiliza globalmente para debug
window.appStore = appStore;
window.Actions = Actions;

document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  const savedState = localStorage.getItem("appState");

  if (savedState) {
    try {
      const parsedState = JSON.parse(savedState);
      appStore.setState(parsedState, "STATE_RESTORED");
    } catch (error) {
      console.error(error);
    }
  } else {
    appStore.setState({}, "STATE_RESTORED");
  }

  executeTimer();
  executeEvento();
  executeEventoRecorrente();
}
