import { Modal } from "./modal.js";
import { appStore } from "../../../js/store/app-store.js";
import { EVENTOS_RECORRENTE_TYPES } from "../../../js/store/types/eventosRecorrente.types.js";

export function abrirModalEditEventoRecorrente(eventoRecorrente) {
  eventoRecorrente = appStore
    .getState()
    .eventosRecorrente.find((ev) => ev.id === eventoRecorrente);

  const categorias = appStore.getState().categorias || [];

  const corpo = `
    <label>Nome:</label>
    <input type="text" id="nomeEvento" value="${eventoRecorrente.nome}">

    <label>Hora:</label>
    <input type="time" id="horaEvento" value="${eventoRecorrente.hora}">

    <label>Categoria:</label>
    <select id="selectCategoria">
      ${categorias
        .map(
          (cat) =>
            `<option value="${cat.id}" ${
              cat.id === eventoRecorrente.idCategoria ? "selected" : ""
            }>${cat.nome}</option>`
        )
        .join("")}
    </select>

    <label>Prioridade:</label>
    <select id="selectPrioridade">
      <option ${
        eventoRecorrente.prioridade === "Baixa" ? "selected" : ""
      }>Baixa</option>
      <option ${
        eventoRecorrente.prioridade === "Média" ? "selected" : ""
      }>Média</option>
      <option ${
        eventoRecorrente.prioridade === "Alta" ? "selected" : ""
      }>Alta</option>
    </select>

    <label>Situação:</label>
    <select id="selectSituacao">
      <option ${
        eventoRecorrente.situacao === "Pendente" ? "selected" : ""
      }>Pendente</option>
      <option ${
        eventoRecorrente.situacao === "Em andamento" ? "selected" : ""
      }>Em andamento</option>
      <option ${
        eventoRecorrente.situacao === "Feito" ? "selected" : ""
      }>Feito</option>
    </select>

    <label>Repetir:</label>
    <div class="dias-semana">
        <label class="dia-btn">
            <input type="checkbox" value="seg" ${
              eventoRecorrente.dias?.includes("seg") ? "checked" : ""
            }>
            <span>Seg</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="ter" ${
              eventoRecorrente.dias?.includes("ter") ? "checked" : ""
            }>
            <span>Ter</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="qua" ${
              eventoRecorrente.dias?.includes("qua") ? "checked" : ""
            }>
            <span>Qua</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="qui" ${
              eventoRecorrente.dias?.includes("qui") ? "checked" : ""
            }>
            <span>Qui</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="sex" ${
              eventoRecorrente.dias?.includes("sex") ? "checked" : ""
            }>
            <span>Sex</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="sab" ${
              eventoRecorrente.dias?.includes("sab") ? "checked" : ""
            }>
            <span>Sáb</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="dom" ${
              eventoRecorrente.dias?.includes("dom") ? "checked" : ""
            }>
            <span>Dom</span>
        </label>
    </div>
  `;

  const deleteEventoRecorrente = () => {
    appStore.dispatch(EVENTOS_RECORRENTE_TYPES.DELETE, eventoRecorrente.id);
    Modal.fechar();
  };

  Modal.abrir("Editar Evento Recorrente", corpo, [
    {
      texto: "Salvar",
      classe: "btn-azul",
      acao: () => {
        const diasSelecionados = Array.from(
          document.querySelectorAll(".dias-semana input:checked")
        ).map((c) => c.value);

        const eventoAtualizado = {
          ...eventoRecorrente,
          nome: document.getElementById("nomeEvento").value,
          hora: document.getElementById("horaEvento").value,
          idCategoria: document.getElementById("selectCategoria").value,
          prioridade: document.getElementById("selectPrioridade").value,
          situacao: document.getElementById("selectSituacao").value,
          dias: diasSelecionados,
        };

        appStore.dispatch(EVENTOS_RECORRENTE_TYPES.UPDATE, eventoAtualizado);
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
      acao: () => deleteEventoRecorrente(),
    },
  ]);
}
