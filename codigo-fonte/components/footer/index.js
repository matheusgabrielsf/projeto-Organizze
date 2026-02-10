class FooterCustom extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <div class="max-container footer-container">
                <img src="../assets/img/logo.png" alt="Logo" height="53" />
                <div style="display: flex; align-items: center; gap: 40px" >
                    <p style="font-size: 14px; color: var(--gray--700); line-height: 24px; text-align: right;">
                      <span style="font-weight: 600">Desenvolvido pela Equipe 4</span> <br />
                      Turma 2025/2 | Desenvolvimento Web Front-Web <br />
                      Análise e Desenvolvimento de Sistemas <br />
                    </p>
                    <img src="../assets/img/logo-puc.png" alt="Logo PUC" height="72" />
                </div>
            </div>
        </footer>
    `;
  }
}

customElements.define("footer-custom", FooterCustom);
