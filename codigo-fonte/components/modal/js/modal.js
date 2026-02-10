export const Modal = {
  elemento: null,

  criarEstrutura() {
    if (this.elemento) return;

    const fundo = document.createElement('div');
    fundo.classList.add('modal');
    fundo.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="titulo"></h2>
          <button type="button" class="fechar">&times;</button>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer"></div>
      </div>
    `;

    document.body.appendChild(fundo);
    this.elemento = fundo;

    fundo.addEventListener('click', e => { if (e.target === fundo) this.fechar(); });
    fundo.querySelector('.fechar').addEventListener('click', () => this.fechar());
  },

  abrir(titulo, corpoHTML, botoes = []) {
    this.criarEstrutura();
    this.elemento.querySelector('.titulo').textContent = titulo;
    this.elemento.querySelector('.modal-body').innerHTML = corpoHTML;

    const footer = this.elemento.querySelector('.modal-footer');
    footer.innerHTML = '';
    botoes.forEach(btn => {
      const button = document.createElement('button');
      button.textContent = btn.texto;
      button.className = btn.classe || '';
      button.addEventListener('click', btn.acao);
      footer.appendChild(button);
    });

    this.elemento.classList.add('ativo');
  },

  fechar() {
    if (this.elemento) this.elemento.classList.remove('ativo');
  }
};