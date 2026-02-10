import { Modal } from "./modal.js";
import { appStore } from "../../../js/store/app-store.js";
import { EVENTOS_RECORRENTE_TYPES } from "../../../js/store/types/eventosRecorrente.types.js";

export function abrirModalAddEventoRecorrente() {
  // Pegando categorias do store
  const categorias = appStore.getState().categorias || [];
  let optionsCategorias = "";
  let initialOption = "";
  let Disable = "";

  if (categorias.length === 0) {
    initialOption =
      '<option value="" disable selected>Nenhuma categoria encontrada</option>';
    Disable = "disabled";
  } else {
    initialOption = '<option value="" selected>Selecione</option>';
    optionsCategorias = categorias
      .map((cat) => `<option value="${cat.id}">${cat.nome}</option>`)
      .join("");
  }

  const corpo = `
    <label>Nome:</label>
    <input type="text" id="nomeEvento">

    <label>Hora:</label>
    <input type="time" id="timeEvento">

    <label>Categoria:</label>
    <select id="selectCategoria" ${Disable}>
      ${initialOption}
      ${optionsCategorias}
    </select>

    <label>Prioridade:</label>
    <select id="selectPrioridade">
      <option value="">Selecione</option>
      <option value="Baixa">Baixa</option>
      <option value="Média">Média</option>
      <option value="Alta">Alta</option>
    </select>

    <label>Situação:</label>
    <select id="selectSituacao">
      <option value="">Selecione</option>
      <option value="Pendente">Pendente</option>
      <option value="Em andamento">Em andamento</option>
      <option value="Feito">Feito</option>
    </select>

    <div class="dias-semana">
        <label class="dia-btn">
            <input type="checkbox" value="seg">
            <span>Seg</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="ter">
            <span>Ter</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="qua">
            <span>Qua</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="qui">
            <span>Qui</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="sex">
            <span>Sex</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="sab">
            <span>Sáb</span>
        </label>

        <label class="dia-btn">
            <input type="checkbox" value="dom">
            <span>Dom</span>
        </label>
    </div>
  `;

  Modal.abrir("Adicionar Evento Recorrente", corpo, [
    {
      texto: "Adicionar",
      classe: "btn-azul",
      acao: () => {
        const eventoRecorrente = {
          id: Date.now().toString(),
          nome: document.getElementById("nomeEvento").value,
          hora: document.getElementById("timeEvento").value,
          idCategoria: document.getElementById("selectCategoria").value,
          prioridade: document.getElementById("selectPrioridade").value,
          situacao: document.getElementById("selectSituacao").value,
          dias: Array.from(
            document.querySelectorAll(".dias-semana input:checked")
          ).map((c) => c.value),
        };

        if (
          !eventoRecorrente.nome ||
          !eventoRecorrente.hora ||
          !eventoRecorrente.idCategoria ||
          !eventoRecorrente.prioridade ||
          !eventoRecorrente.dias ||
          !eventoRecorrente.situacao
        ) {
          alert("Por favor, preencha todos os campos");
          return;
        }

        appStore.dispatch(EVENTOS_RECORRENTE_TYPES.ADD, eventoRecorrente);
        Modal.fechar();
      },
    },
    {
      texto: "Cancelar",
      classe: "btn-cinza",
      acao: () => Modal.fechar(),
    },
  ]);
}
