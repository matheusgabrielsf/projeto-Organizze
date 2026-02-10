import { Actions } from "../../js/store/actions/index.js";
import { appStore } from "../../js/store/app-store.js";
import { AUTH_STATE_UPDATED } from "../../js/store/types/auth.types.js";

class HeaderCustom extends HTMLElement {
  authState = null;

  constructor() {
    super();

    appStore.subscribe("STATE_RESTORED", (_event, state) => {
      this.authState = state.auth;
      this.render();
    });

    appStore.subscribe(AUTH_STATE_UPDATED, (_event, state) => {
      this.authState = state.auth;
      this.render();
    });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  handleLogout() {
    const action = Actions.auth.logout();
    appStore.dispatch(action.type, action.payload);

    window.location.href = "../pages/login.html";
  }

  attachEventListeners() {
    const logoutBtn = this.querySelector(".btn-logout");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", this.handleLogout);
    }
  }

  removeEventListeners() {
    const logoutBtn = this.querySelector(".btn-logout");
    if (logoutBtn) {
      logoutBtn.removeEventListener("click", this.handleLogout);
    }
  }

  render() {
    this.innerHTML = `
        <header>
            <div class="header-container max-container">
              <div style="min-width: 300px;">
                 <img src="../assets/img/logo.png" alt="Logo" height="53" />
              </div>
              <nav>
                  <a href="../pages/index.html">Home</a>
                  <a href="../pages/agenda.html">Agenda</a>
              </nav>
              <div style="min-width: 300px; display: flex; justify-content: flex-end; align-items: center;">
                  ${
                    this.authState !== null
                      ? `<div class="user-info">
                        <span>${this.authState.nome}</span>
                        <button type="button" class="btn-logout">Deslogar</button>
                      </div>`
                      : `<a href="../pages/login.html" style="color: var(--gray--700); text-decoration: none; font-weight: 500;">Entrar</a>`
                  }
              </div>
            </div>
        </header>
    `;

    this.attachEventListeners();
  }
}

customElements.define("header-custom", HeaderCustom);
