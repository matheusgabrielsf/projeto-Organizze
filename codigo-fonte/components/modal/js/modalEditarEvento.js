import { Modal } from "./modal.js";
import { appStore } from "../../../js/store/app-store.js";
import { EVENTOS_TYPES } from "../../../js/store/types/eventos.types.js";

export function abrirModalEditar(evento) {
  // Pegando categorias do store
  const categorias = appStore.getState().categorias || [];
  let initialOption = "";
  let Disable = "";

  const eventoCategoria = categorias.find(
    (cat) => cat.id === evento.idCategoria
  );

  if (categorias.length === 0) {
    initialOption =
      '<option value="" disable selected>Nenhuma categoria encontrada</option>';
    Disable = "disabled";
  } else {
    initialOption = '<option value="" selected>Selecione</option>';
  }

  const corpo = `
    <label>Nome:</label>
    <input type="text" id="nomeEvento" value="${evento.nome}">

    <label>Data:</label>
    <input type="datetime-local" id="dataEvento" value="${evento.data}">

    <label>Categoria:</label>
    <select id="selectCategoria" ${Disable}>
      ${initialOption}
      ${categorias
        .map(
          (cat) =>
            `<option value="${cat.id}" ${
              cat.id === evento.idCategoria ? "selected" : ""
            }>${cat.nome}</option>`
        )
        .join("")}
    </select>

    <label>Prioridade:</label>
    <select id="selectPrioridade">
      <option ${evento.prioridade === "Baixa" ? "selected" : ""}>Baixa</option>
      <option ${evento.prioridade === "Média" ? "selected" : ""}>Média</option>
      <option ${evento.prioridade === "Alta" ? "selected" : ""}>Alta</option>
    </select>

    <label>Situação:</label>
    <select id="selectSituacao">
      <option ${
        evento.situacao === "Pendente" ? "selected" : ""
      }>Pendente</option>
      <option ${
        evento.situacao === "Em andamento" ? "selected" : ""
      }>Em andamento</option>
      <option ${evento.situacao === "Feito" ? "selected" : ""}>Feito</option>
    </select>
  `;

  const deleteEvento = () => {
    appStore.dispatch(EVENTOS_TYPES.DELETE, evento.id);
    Modal.fechar();
  };

  Modal.abrir("Editar Evento", corpo, [
    {
      texto: "Salvar",
      classe: "btn-azul",
      acao: () => {
        const eventoAtualizado = {
          ...evento,
          nome: document.getElementById("nomeEvento").value,
          data: document.getElementById("dataEvento").value,
          idCategoria: document.getElementById("selectCategoria").value,
          prioridade: document.getElementById("selectPrioridade").value,
          situacao: document.getElementById("selectSituacao").value,
        };

        appStore.dispatch(EVENTOS_TYPES.UPDATE, eventoAtualizado);
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
      acao: () => deleteEvento(),
    },
  ]);
}
