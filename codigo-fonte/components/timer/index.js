import { appStore } from "../../js/store/app-store.js";
import { abrirModalEditarTimer } from "../modal/js/modalEditarTimer.js";
import { secondsToHHMMSS } from "../../js/helpers/timeToSeconds.js";
import { TIMERS_TYPES } from "../../js/store/types/timers.types.js";

class Timer extends HTMLElement {
  timer;

  constructor() {
    super();

    this.timer = appStore
      .getState()
      .timers.find((timer) => timer.id === this.getAttribute("idTimer"));
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  attachEventListeners() {
    this.querySelector(".editTimer")?.addEventListener("click", () => {
      abrirModalEditarTimer(this.timer);
    });

    this.querySelector(".playTimer")?.addEventListener("click", () => {
      appStore.dispatch(TIMERS_TYPES.UPDATE, {
        ...this.timer,
        status: "ANDAMENTO",
      });
    });

    this.querySelector(".pauseTimer")?.addEventListener("click", () => {
      appStore.dispatch(TIMERS_TYPES.UPDATE, {
        ...this.timer,
        status: "PAUSADO",
      });
    });
  }

  removeEventListeners() {}

  render() {
    this.innerHTML = `
      <span style="font-weight: 600;" class="editTimer">${
        this.timer.nome
      }</span>

      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px">
        <div style="display: flex; flex-direction: column; gap: 4px; color: var(${
          this.timer.ciclo === "DURACAO" ? "--blue--600" : "--gray--600"
        });">
          <p>Duração</p>
          <p style="font-weight: 700; font-size: 14px;">${
            this.timer.duracao
          }</p>
        </div>
        
        <div style="text-align: right; display: flex; flex-direction: column; gap: 4px; color: var(${
          this.timer.ciclo === "DESCANSO" ? "--red--600" : "--gray--600"
        });">
          <p>Descanso</p>
          <p style="font-weight: 700; font-size: 14px;">${
            this.timer.descanso
          }</p>
        </div>
      </div>
      
      <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; background-color: var(${
        this.timer.ciclo === "DESCANSO" ? "--red--100" : "--blue--100"
      }); border-radius: 6px; font-weight: 600; color: var(${
      this.timer.ciclo === "DESCANSO" ? "--red--600" : "--blue--600"
    }); gap: 10px; padding: 10px;">

      <div style="display: flex; justify-content: center; align-items: center; gap: 6px;">
      ${
        this.timer.status === "PAUSADO"
          ? `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" class="playTimer">
              <path d="M13.2143 21.0055L20.6617 16.2315C21.0182 16.0023 21.1964 15.6841 21.1964 15.2767C21.1964 14.8693 21.0182 14.5511 20.6617 14.3219L13.2143 9.54794C12.8324 9.29333 12.4441 9.27423 12.0495 9.49065C11.6549 9.70707 11.4575 10.0444 11.4575 10.5027V20.0507C11.4575 20.509 11.6549 20.8463 12.0495 21.0628C12.4441 21.2792 12.8324 21.2601 13.2143 21.0055ZM15.2767 30.5534C13.1634 30.5534 11.1775 30.1524 9.31879 29.3504C7.46012 28.5483 5.84334 27.4599 4.46844 26.085C3.09353 24.7101 2.00507 23.0933 1.20304 21.2346C0.401013 19.376 0 17.39 0 15.2767C0 13.1634 0.401013 11.1775 1.20304 9.31879C2.00507 7.46012 3.09353 5.84334 4.46844 4.46844C5.84334 3.09353 7.46012 2.00507 9.31879 1.20304C11.1775 0.401013 13.1634 0 15.2767 0C17.39 0 19.376 0.401013 21.2346 1.20304C23.0933 2.00507 24.7101 3.09353 26.085 4.46844C27.4599 5.84334 28.5483 7.46012 29.3504 9.31879C30.1524 11.1775 30.5534 13.1634 30.5534 15.2767C30.5534 17.39 30.1524 19.376 29.3504 21.2346C28.5483 23.0933 27.4599 24.7101 26.085 26.085C24.7101 27.4599 23.0933 28.5483 21.2346 29.3504C19.376 30.1524 17.39 30.5534 15.2767 30.5534ZM15.2767 27.4981C18.6885 27.4981 21.5783 26.3141 23.9462 23.9462C26.3141 21.5783 27.4981 18.6885 27.4981 15.2767C27.4981 11.8649 26.3141 8.97506 23.9462 6.60717C21.5783 4.23929 18.6885 3.05534 15.2767 3.05534C11.8649 3.05534 8.97506 4.23929 6.60717 6.60717C4.23929 8.97506 3.05534 11.8649 3.05534 15.2767C3.05534 18.6885 4.23929 21.5783 6.60717 23.9462C8.97506 26.3141 11.8649 27.4981 15.2767 27.4981Z" fill="currentColor"/>
            </svg>`
          : `
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" class="pauseTimer">
              <path d="M12.22 21.385C12.6528 21.385 13.0156 21.2386 13.3083 20.9458C13.6011 20.6531 13.7475 20.2903 13.7475 19.8575V10.6925C13.7475 10.2597 13.6011 9.89693 13.3083 9.60416C13.0156 9.31138 12.6528 9.165 12.22 9.165C11.7872 9.165 11.4244 9.31138 11.1317 9.60416C10.8389 9.89693 10.6925 10.2597 10.6925 10.6925V19.8575C10.6925 20.2903 10.8389 20.6531 11.1317 20.9458C11.4244 21.2386 11.7872 21.385 12.22 21.385ZM18.33 21.385C18.7628 21.385 19.1256 21.2386 19.4183 20.9458C19.7111 20.6531 19.8575 20.2903 19.8575 19.8575V10.6925C19.8575 10.2597 19.7111 9.89693 19.4183 9.60416C19.1256 9.31138 18.7628 9.165 18.33 9.165C17.8972 9.165 17.5344 9.31138 17.2417 9.60416C16.9489 9.89693 16.8025 10.2597 16.8025 10.6925V19.8575C16.8025 20.2903 16.9489 20.6531 17.2417 20.9458C17.5344 21.2386 17.8972 21.385 18.33 21.385ZM15.275 30.55C13.162 30.55 11.1762 30.149 9.31775 29.3471C7.45929 28.5452 5.84269 27.4568 4.46794 26.0821C3.09319 24.7073 2.00484 23.0907 1.20291 21.2322C0.400969 19.3738 0 17.388 0 15.275C0 13.162 0.400969 11.1762 1.20291 9.31775C2.00484 7.45929 3.09319 5.84269 4.46794 4.46794C5.84269 3.09319 7.45929 2.00484 9.31775 1.20291C11.1762 0.400969 13.162 0 15.275 0C17.388 0 19.3738 0.400969 21.2322 1.20291C23.0907 2.00484 24.7073 3.09319 26.0821 4.46794C27.4568 5.84269 28.5452 7.45929 29.3471 9.31775C30.149 11.1762 30.55 13.162 30.55 15.275C30.55 17.388 30.149 19.3738 29.3471 21.2322C28.5452 23.0907 27.4568 24.7073 26.0821 26.0821C24.7073 27.4568 23.0907 28.5452 21.2322 29.3471C19.3738 30.149 17.388 30.55 15.275 30.55ZM15.275 27.495C18.6864 27.495 21.5759 26.3112 23.9436 23.9436C26.3112 21.5759 27.495 18.6864 27.495 15.275C27.495 11.8636 26.3112 8.97406 23.9436 6.60644C21.5759 4.23881 18.6864 3.055 15.275 3.055C11.8636 3.055 8.97406 4.23881 6.60644 6.60644C4.23881 8.97406 3.055 11.8636 3.055 15.275C3.055 18.6864 4.23881 21.5759 6.60644 23.9436C8.97406 26.3112 11.8636 27.495 15.275 27.495Z" fill="currentColor"/>
            </svg>
          `
      }

        <span style="font-size: 18px;">${secondsToHHMMSS(
          this.timer.segundosRestantes
        )}</span>
      </div>

      <p style="font-size: 12px; color: var(--gray--500);">${
        this.timer.ciclo === "DURACAO" ? "Duração..." : "Descanso..."
      }</p> 
        
      </div>
    `;

    this.attachEventListeners();
  }
}

customElements.define("timer-custom", Timer);
