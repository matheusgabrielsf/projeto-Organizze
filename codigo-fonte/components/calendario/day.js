import { appStore } from "../../js/store/app-store.js";
import { EVENTOS_STATE_UPDATED } from "../../js/store/types/eventos.types.js";
import { abrirModalAdicionar } from "../modal/js/modalAdicionarEvento.js";
import "./event.js";

class CalendarioDia extends HTMLElement {
  events = [];

  constructor() {
    super();

    appStore.subscribe("STATE_RESTORED", (_event, state) => {
      this.render();
    });

    appStore.subscribe(EVENTOS_STATE_UPDATED, (_event, state) => {
      this.render();
    });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  attachEventListeners() {
    this.querySelector(".abrirModalAdicionar")?.addEventListener(
      "click",
      () => {
        abrirModalAdicionar(this.getAttribute("date") + "T00:00");
      }
    );
  }

  removeEventListeners() {}

  render() {
    const date = this.getAttribute("date");
    const dia = date ? date.split("-")[2] : "";

    const idCategoria = this.getAttribute("idCategoria");
    const idSituacao = this.getAttribute("idSituacao");

    let events = appStore
      .getState()
      .eventos.filter((e) => e.data.split("T")[0] === date)
      .sort((a, b) => {
        return new Date(a.data) - new Date(b.data);
      });

    if (idCategoria)
      events = events.filter((e) => e.idCategoria === idCategoria);

    if (idSituacao) events = events.filter((e) => e.situacao === idSituacao);

    this.innerHTML = `
      <button class="abrirModalAdicionar calendario-btn-add-evento-dia">${dia}</button>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${events
          .map(
            (e) =>
              `<calendario-evento-custom idEvento="${e.id}"></calendario-evento-custom>`
          )
          .join("")}
      </div>
    `;

    this.attachEventListeners();
  }
}

customElements.define("calendario-dia-custom", CalendarioDia);
