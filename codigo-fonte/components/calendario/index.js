import "./day.js";
import { meses } from "../../data/meses.js";
import { abrirModalAdicionar } from "../modal/js/modalAdicionarEvento.js";
import { abrirModalAdicionarCategoria } from "../modal/js/modalAdicionarCategoria.js";
import { abrirModalListarCategorias } from "../modal/js/modalListarCategorias.js";
import { abrirModalListarEventoRecorrente } from "../modal/js/modalListarEventoRecorrente.js";
import { appStore } from "../../js/store/app-store.js";
import { CATEGORIAS_STATE_UPDATED } from "../../js/store/types/categorias.types.js";

class Calendario extends HTMLElement {
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();

  monthSelected = this.currentMonth;
  yearSelected = this.currentYear;

  categorias = [];

  categoriaSelected = "";
  situacaoSelected = "";

  constructor() {
    super();

    appStore.subscribe(CATEGORIAS_STATE_UPDATED, (_, state) => {
      this.categorias = state.categorias;
      this.render();
    });

    appStore.subscribe("STATE_RESTORED", (_, state) => {
      this.categorias = state.categorias;
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
    this.querySelector(".btn-previus-month")?.addEventListener(
      "click",
      this.handlePreviousMonth
    );

    this.querySelector(".btn-next-month")?.addEventListener(
      "click",
      this.handleNextMonth
    );

    this.querySelector(".abrirModalAdicionar")?.addEventListener(
      "click",
      () => {
        abrirModalAdicionar();
      }
    );

    this.querySelector(".abrirModalAdicionarCategoria")?.addEventListener(
      "click",
      () => {
        abrirModalListarCategorias(appStore.getState().categorias);
      }
    );

    this.querySelector(
      ".abrirModalAdicionarEventoRecorrente"
    )?.addEventListener("click", () => {
      abrirModalListarEventoRecorrente(appStore.getState().eventosRecorrente);
    });

    this.querySelector("#select-situacao-calendario")?.addEventListener(
      "change",
      this.handleSituacaoChange
    );

    this.querySelector("#select-categoria-calendario")?.addEventListener(
      "change",
      this.handleCategoriaChange
    );
  }

  removeEventListeners() {}

  handleNextMonth = () => {
    this.monthSelected++;
    if (this.monthSelected > 11) {
      this.monthSelected = 0;
      this.yearSelected++;
    }

    this.render();
  };

  handlePreviousMonth = () => {
    this.monthSelected--;
    if (this.monthSelected < 0) {
      this.monthSelected = 11;
      this.yearSelected--;
    }

    this.render();
  };

  handleSituacaoChange = (event) => {
    this.situacaoSelected = event.target.value;
    this.render();
  };

  handleCategoriaChange = (event) => {
    this.categoriaSelected = event.target.value;
    this.render();
  };

  render() {
    this.innerHTML = `
          <div
            style="display: flex; justify-content: space-between; width: 100%; align-items: center; height: 80px; padding: 0 20px; border-left: 1px solid var(--gray--200);">
            <div style="display: flex; align-items: center; gap: 16px;">
              <span class="btn-previus-month"> &lt; </span>
              <p style="font-size: 22px">${meses[this.monthSelected].nome} ${
      this.yearSelected
    }</p>
              <span class="btn-next-month"> &gt; </span>
            </div>

            <div style="display: flex; align-items: center; gap: 12px;">

              <div style="margin-right: 12px;">
                <label for="select-situacao-calendario" style="font-size:14px; margin-right:8px;" class="label-simple">Situação:</label>
                <select id="select-situacao-calendario" class="input-simple" style="width: 160px;">
                  <option value="" ${
                    this.situacaoSelected === "" ? "selected" : ""
                  }>Todas</option>
                  <option value="Pendente" ${
                    this.situacaoSelected === "Pendente" ? "selected" : ""
                  }>Pendente</option>
                  <option value="Em andamento" ${
                    this.situacaoSelected === "Em andamento" ? "selected" : ""
                  }>Em andamento</option>
                  <option value="Feito" ${
                    this.situacaoSelected === "Feito" ? "selected" : ""
                  }>Feito</option>
                </select>
              </div>
              
              <div>
                <label for="select-categoria-calendario" style="font-size:14px; margin-right:8px;" class="label-simple">Categoria:</label>
                <select id="select-categoria-calendario" class="input-simple" style="width: 160px;">
                  <option value="" ${
                    this.categoriaSelected === "" ? "selected" : ""
                  }>Todas</option>
                  ${this.categorias
                    .map(
                      (categoria) =>
                        `<option value="${categoria.id}" ${
                          this.categoriaSelected === categoria.id
                            ? "selected"
                            : ""
                        }>${categoria.nome}</option>`
                    )
                    .join("")}
                </select>
              </div>

              <div class="abrirModalAdicionar" style="cursor: pointer; padding: 10px 12px; background-color: var(--blue--600); color: white; border-radius: 4px; font-size:14px">
                Adcionar evento
              </div>

              <div style="color: var(--gray--600); width: 24px; height: 24px; cursor: pointer;" class="abrirModalAdicionarEventoRecorrente">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>

              <div style="color: var(--gray--600); width: 20px; height: 20px; cursor: pointer;" class="abrirModalAdicionarCategoria">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
              </div>
            </div>
          </div>

          <div id="dias-semana-calendario">
            <p>Domingo</p>
            <p>Segunda</p>
            <p>Terça</p>
            <p>Quarta</p>
            <p>Quinta</p>
            <p>Sexta</p>
            <p>Sábado</p>
          </div>

          <div id="view-calendario">
            ${(() => {
              const countDaysOfMonth = new Date(
                this.yearSelected,
                this.monthSelected + 1,
                0
              ).getDate();

              let renderHtml = "";

              const firstDayOfMonth = new Date(
                this.yearSelected,
                this.monthSelected,
                1
              ).getDay();

              for (let i = 0; i < firstDayOfMonth; i++) {
                renderHtml += `<div class="calendario-dia-mes-anterior"></div>`;
              }

              for (let i = 1; i <= countDaysOfMonth; i++) {
                const month = String(this.monthSelected + 1).padStart(2, "0");
                const day = String(i).padStart(2, "0");

                renderHtml += `<calendario-dia-custom date="${
                  this.yearSelected + "-" + month + "-" + day
                }" idCategoria="${this.categoriaSelected}" idSituacao="${
                  this.situacaoSelected
                }" ></calendario-dia-custom>`;
              }

              const lastDayOfMonth = new Date(
                this.yearSelected,
                this.monthSelected,
                countDaysOfMonth
              ).getDay();

              const daysToAddAfter =
                lastDayOfMonth < 6 ? 6 - lastDayOfMonth : 0;

              for (let i = 0; i < daysToAddAfter; i++) {
                renderHtml += `<div class="calendario-dia-mes-anterior"></div>`;
              }

              return renderHtml;
            })()}
          </div>
    `;

    this.attachEventListeners();
  }
}

customElements.define("calendario-custom", Calendario);
