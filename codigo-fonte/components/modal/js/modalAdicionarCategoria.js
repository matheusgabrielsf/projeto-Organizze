import { Modal } from './modal.js'; 
import { appStore } from '../../../js/store/app-store.js'; 
import { CATEGORIAS_TYPES } from '../../../js/store/types/categorias.types.js';

export function abrirModalAdicionarCategoria() {
    const corpo = `
      <label>Nome da Categoria:</label>
      <input type="text" id="nomeCategoria">
    `;
    
    Modal.abrir('Adicionar Categoria', corpo, [
        {
          texto: 'Adicionar',
          classe: 'btn-azul',
          acao: () => {
              const categoria = {
                  id: Date.now().toString(),
                  nome: document.getElementById('nomeCategoria').value,
                };
                
                if (!categoria.nome) {
                    alert ('Por favor, preencha todos os campos');
                    return;
                }
                
                appStore.dispatch(CATEGORIAS_TYPES.ADD, categoria);
                Modal.fechar(); 
            }
        },
        {
            texto: 'Cancelar',
            classe: 'btn-cinza',
            acao: () => Modal.fechar()
        }
    ]);
}
    