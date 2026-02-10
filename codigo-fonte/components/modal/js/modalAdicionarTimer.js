import { Modal } from "./modal.js";
import { appStore } from "../../../js/store/app-store.js";
import { TIMERS_TYPES } from "../../../js/store/types/timers.types.js";
import { timeToSeconds } from "../../../js/helpers/timeToSeconds.js";

export function abrirModalAdicionarTimer() {
  const corpo = `
        <label class="label">Nome:</label>
        <input class="input" type="text" id="nomeTimer">

        <label class="label">Duração:</label>
        <input class="input" type="time" id="duracaoTimer" step="1">

        <label class="label">Descanso:</label>
        <input class="input" type="time" id="descansoTimer" step="1">
    `;

  Modal.abrir("Adicionar Timer", corpo, [
    {
      texto: "Adicionar",
      classe: "btn-azul",
      acao: () => {
        const nome = document.getElementById("nomeTimer").value.trim();
        const duracao = document.getElementById("duracaoTimer").value;
        const descanso = document.getElementById("descansoTimer").value;

        if (!nome || !duracao) {
          alert("Por favor, preencha o nome e a duração.");
          return;
        }

        const novoTimer = {
          id: Date.now().toString(),
          nome,
          duracao,
          descanso,
          criadoEm: new Date().toISOString(),
          ciclo: "DURACAO",
          status: "PAUSADO",
          segundosRestantes: timeToSeconds(duracao),
        };

        appStore.dispatch(TIMERS_TYPES.ADD, novoTimer);

        Modal.fechar();
      },
    },
    {
      texto: "Cancelar",
      classe: "btn-cinza",
      acao: () => Modal.fechar(),
    },
  ]);
}
