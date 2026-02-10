import { Modal } from "./modal.js";
import { appStore } from "../../../js/store/app-store.js";
import { TIMERS_TYPES } from "../../../js/store/types/timers.types.js";
import { timeToSeconds } from "../../../js/helpers/timeToSeconds.js";

export function abrirModalEditarTimer(timer) {
  const corpo = `
    <label class="label">Nome:</label>
    <input class="input" type="text" id="nomeTimer" value="${timer.nome}">

    <label class="label">Duração:</label>
    <input class="input" type="time" id="duracaoTimer" value="${
      timer.duracao
    }" step="1">

    <label class="label">Descanso:</label>
    <input class="input" type="time" id="descansoTimer" value="${
      timer.descanso || ""
    }" step="1">
  `;

  const deleteTimer = () => {
    appStore.dispatch(TIMERS_TYPES.DELETE, timer.id);
    Modal.fechar();
  };

  Modal.abrir("Editar Timer", corpo, [
    {
      texto: "Salvar",
      classe: "btn-azul",
      acao: () => {
        const nome = document.getElementById("nomeTimer").value.trim();
        const duracao = document.getElementById("duracaoTimer").value;
        const descanso = document.getElementById("descansoTimer").value;

        if (!nome || !duracao) {
          alert("Por favor, preencha o nome e a duração.");
          return;
        }

        const timerAtualizado = {
          ...timer,
          nome,
          duracao,
          descanso,
          status: "PAUSADO",
          segundosRestantes: timeToSeconds(
            timer.ciclo === "DURACAO" ? duracao : descanso
          ),
        };

        appStore.dispatch(TIMERS_TYPES.UPDATE, timerAtualizado);

        Modal.fechar();
      },
    },
    {
      texto: "Cancelar",
      classe: "btn-cinza",
      acao: () => Modal.fechar(),
    },
    {
      texto: "Excluir",
      classe: "btn-cinza",
      acao: () => deleteTimer(),
    },
  ]);
}
