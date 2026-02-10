import { appStore } from "../js/store/app-store.js";
import { TIMERS_STATE_UPDATED } from "../js/store/types/timers.types.js";
import { abrirModalAdicionarTimer } from "../components/modal/js/modalAdicionarTimer.js";
import { EVENTOS_STATE_UPDATED } from "../js/store/types/eventos.types.js";
import { abrirModalAdicionar } from "../components/modal/js/modalAdicionarEvento.js";
import { abrirModalEditar } from "../components/modal/js/modalEditarEvento.js";

/* ------------------------------------------------------------ */
/* exibe a data de hoje */
const eventosHojeElemento = document.getElementById("eventos-hoje");
const hoje = new Date();
const dia = String(hoje.getDate()).padStart(2, "0");
const mes = String(hoje.getMonth() + 1).padStart(2, "0");
eventosHojeElemento.textContent = `Eventos de Hoje (${dia} / ${mes})`;

/* ------------------------------------------------------------ */
/* exibir timers */
const renderTimers = (timers) => {
  const listTimers = document.getElementById("lista-timers");

  listTimers.innerHTML = `
    <div class="itemro abrirModalAdicionarTimer" style="cursor: pointer;">
      <div class="framero">
        <div class="soma">+</div>
      </div>
      <p class="adicionartime">Adicionar</p>
    </div>
  `;

  timers.map((timer) => {
    return listTimers.insertAdjacentHTML(
      "beforeend",
      `<timer-custom idTimer="${timer.id}"></timer-custom>`
    );
  });

  document
    .querySelector(".abrirModalAdicionarTimer")
    ?.addEventListener("click", () => {
      abrirModalAdicionarTimer();
    });
};

appStore.subscribe(TIMERS_STATE_UPDATED, (_event, state) => {
  renderTimers(state.timers);
});

appStore.subscribe("STATE_RESTORED", (_event, state) => {
  if (!state.auth) {
    window.location.href = "./login.html";
    return;
  }

  renderTimers(state.timers);
  renderEventos(state.eventos || []);
});

/* ------------------------------------------------------------ */
/* exibir eventos de hoje */
const renderEventos = (eventos) => {
  const listEventos = document.querySelector(".list2");
  const eventosDia = eventos
    .filter(
      (e) => e.data.split("T")[0] === `${hoje.getFullYear()}-${mes}-${dia}`
    )
    .sort((a, b) => new Date(a.data) - new Date(b.data));

  listEventos.innerHTML = "";

  if (eventosDia.length === 0) {
    listEventos.innerHTML =
      '<p style="text-align: center; padding: 20px;">Nenhum evento para hoje</p>';
    return;
  }

  eventosDia.map((evento) => {
    const categoria = appStore
      .getState()
      .categorias.find((cat) => cat.id === evento.idCategoria);

    return listEventos.insertAdjacentHTML(
      "beforeend",
      `<div class="evento-card" data-evento-id="${evento.id}"
          style="border: 1px solid #D9D9D9; border-radius: 8px; padding: 16px; margin-bottom: 12px; width: 300px; gap: 16px; display: flex; flex-direction: column; background-color: white; cursor: pointer;">
          <p style="text-align: center; font-weight: 600;">${evento.nome}</p>
          <div style="display: flex; justify-content: space-between;">
            <p style="color: var(--gray--600); font-size: 14px;">Hora:</p>
            <p>${evento.data.split("T")[1]}</p>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <p style="color: var(--gray--600); font-size: 14px;">Categoria:</p>
            <p>${categoria.nome}</p>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <p style="color: var(--gray--600); font-size: 14px;">Prioridade:</p>
            <p>${evento.prioridade}</p>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <p style="color: var(--gray--600); font-size: 14px;">Situação:</p>
            <p>${evento.situacao}</p>
          </div>
        </div>`
    );
  });

  document.querySelectorAll(".evento-card").forEach((card) => {
    card.addEventListener("click", () => {
      const eventoEncontrado = eventosDia.find(
        (e) => e.id === card.getAttribute("data-evento-id")
      );

      if (eventoEncontrado) {
        abrirModalEditar(eventoEncontrado);
      }
    });
  });
};

appStore.subscribe(EVENTOS_STATE_UPDATED, (_event, state) => {
  renderEventos(state.eventos || []);
});

/* ------------------------------------------------------------ */
/* abrir modal adicionar evento */
document.addEventListener("DOMContentLoaded", () => {
  const botaoAdicionar = document.querySelector(".adicionarevent");

  if (!botaoAdicionar) {
    console.warn("Elemento .adicionarevent não encontrado no DOM.");
    return;
  }

  botaoAdicionar.addEventListener("click", (e) => {
    e.preventDefault();
    try {
      abrirModalAdicionar();
    } catch (err) {
      console.error("Erro ao abrir modal:", err);
    }
  });
});
