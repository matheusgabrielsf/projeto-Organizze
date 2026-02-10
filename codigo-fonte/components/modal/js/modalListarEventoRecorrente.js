import { Modal } from "./modal.js";
import { abrirModalEditEventoRecorrente } from "./modalEditEventoRecorrente.js";
import { abrirModalAddEventoRecorrente } from "./modalAddEventoRecorrente.js";
import { appStore } from "../../../js/store/app-store.js";

window.abrirModalEditEventoRecorrente = abrirModalEditEventoRecorrente;

export function abrirModalListarEventoRecorrente(eventosRecorrentes) {
  let corpoTabelaRecorrente = "";

  if (eventosRecorrentes.length === 0) {
    corpoTabelaRecorrente = "<p>Nenhum evento recorrente encontrado.</p>";
  } else {
    corpoTabelaRecorrente = "<ul>";

    eventosRecorrentes.forEach((eventoRecorrente) => {
      const categoria = appStore
        .getState()
        .categorias.find((cat) => cat.id === eventoRecorrente.idCategoria);

      console.log(eventoRecorrente);

      corpoTabelaRecorrente += `
                <li style="display: flex; justify-content: space-between; align-items: flex-start; padding: 12px 0; border-bottom: 1px solid #ccc; gap: 16px;">
                    <div style="flex: 1;">
                      <strong style="display: block; margin-bottom: 10px; font-size: 16px;">${eventoRecorrente.nome}</strong>
                      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px; color: #666;">
                        <div><strong>Horário:</strong> <p>${eventoRecorrente.hora}</p></div>
                        <div><strong>Categoria:</strong> <p>${categoria.nome}</p></div>
                        <div><strong>Prioridade:</strong> <p>${eventoRecorrente.prioridade}</p></div>
                        <div><strong>Situação:</strong> <p>${eventoRecorrente.situacao}</p></div>
                      </div>
                    </div>

                    <div style="width: 20px; cursor: pointer; min-width: 20px;"  onclick="abrirModalEditEventoRecorrente('${eventoRecorrente.id}')">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </li>
            `;
    });

    corpoTabelaRecorrente += "</ul>";
  }

  const corpo = `
        <div>
            ${corpoTabelaRecorrente}
        </div>
    `;

  Modal.abrir("Lista de Eventos Recorrentes", corpo, [
    {
      texto: "Criar Novo",
      classe: "btn-cinza",
      acao: () => abrirModalAddEventoRecorrente(),
    },
    {
      texto: "Fechar",
      classe: "btn-cinza",
      acao: () => Modal.fechar(),
    },
  ]);
}
