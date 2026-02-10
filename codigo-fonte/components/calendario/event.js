import { appStore } from "../../js/store/app-store.js";
import { abrirModalEditar } from "../modal/js/modalEditarEvento.js";

class CalendarioEvento extends HTMLElement {
  evento;

  constructor() {
    super();

    this.evento = appStore
      .getState()
      .eventos.find((v) => v.id === this.getAttribute("idEvento"));
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  attachEventListeners() {
    const btnAdicionar = this.querySelector(".abrirModalEditar");

    if (btnAdicionar) {
      btnAdicionar.addEventListener("click", () => {
        abrirModalEditar(this.evento);
      });
    }
  }

  removeEventListeners() {}

  render() {
    const time = this.evento.data.split("T")[1] || "";

    this.innerHTML = `
      <div class="abrirModalEditar">
        <div style="display: flex; gap: 6px; align-items: center;">
          <div
            style="min-width: 8px; min-height: 8px;  width: 8px; height: 8px; background-color: ${(() => {
              switch (this.evento.prioridade) {
                case "Baixa":
                  return "blue";
                case "Média":
                  return "orange";
                case "Alta":
                  return "red";
              }
            })()}; border-radius: 50%;">
          </div>

          <span style="font-size:12px">${this.evento.nome}</span>
        </div>

        <span style="font-size:12px">${time}</span>
      </div>
    `;

    this.attachEventListeners();
  }
}

customElements.define("calendario-evento-custom", CalendarioEvento);
