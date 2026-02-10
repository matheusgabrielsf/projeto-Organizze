import { Modal } from "./modal.js";
import { abrirModalEditarCategoria } from "./modalEditarCategoria.js";
import { abrirModalAdicionarCategoria } from "./modalAdicionarCategoria.js";

window.abrirModalEditarCategoria = abrirModalEditarCategoria;

export function abrirModalListarCategorias(categorias) {
  let corpoTabelaCategoria = "";

  if (categorias.length === 0) {
    corpoTabelaCategoria = "<p>Nenhuma categoria encontrada.</p>";
  } else {
    corpoTabelaCategoria = "<ul>";
    categorias.forEach((categoria) => {
      corpoTabelaCategoria += `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #ccc; ">
                    ${categoria.nome}
                    <div style="width: 20px; cursor: pointer;" onclick="abrirModalEditarCategoria({ id: '${categoria.id}', nome: '${categoria.nome}' })">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </li>
            `;
    });

    corpoTabelaCategoria += "</ul>";
  }

  Modal.abrir(
    "Lista de Categorias",
    `
        <div>
            ${corpoTabelaCategoria}
        </div>
    `,
    [
      {
        texto: "Criar Novo",
        classe: "btn-cinza",
        acao: () => abrirModalAdicionarCategoria(),
      },
      {
        texto: "Fechar",
        classe: "btn-cinza",
        acao: () => Modal.fechar(),
      },
    ]
  );
}
