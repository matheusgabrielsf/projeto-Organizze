import { Modal } from "./modal.js";
import { appStore } from "../../../js/store/app-store.js";
import { CATEGORIAS_TYPES } from "../../../js/store/types/categorias.types.js";

export function abrirModalEditarCategoria(categoria) {
  const corpo = `
    <label>Nome da Categoria:</label>
    <input type="text" id="nomeCategoria" value="${categoria.nome}">
  `;

  const deleteCategoria = () => {
    appStore.dispatch(CATEGORIAS_TYPES.DELETE, categoria.id);
    Modal.fechar();
  };

  Modal.abrir("Editar Categoria", corpo, [
    {
      texto: "Salvar",
      classe: "btn-azul",
      acao: () => {
        const nome = document.getElementById("nomeCategoria").value.trim();

        if (!nome) {
          alert("Por favor, preencha o nome da categoria");
          return;
        }

        const categoriaAtualizada = {
          id: categoria.id,
          nome,
        };

        appStore.dispatch(CATEGORIAS_TYPES.UPDATE, categoriaAtualizada);
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
      acao: () => deleteCategoria(),
    },
  ]);
}
