import { Modal } from "./modal.js";
import { appStore } from "../../../js/store/app-store.js";
import { EVENTOS_TYPES } from "../../../js/store/types/eventos.types.js";

/* export function abrirModalAdicionar(date) {
  if (!date) {
    const now = new Date();

    const pad = (n) => n.toString().padStart(2, "0");

    date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
      now.getDate()
    )}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
  } */

export function abrirModalAdicionar(date) {
    if (!date) {
    const now = new Date();

    const pad = (n) => n.toString().padStart(2, "0");

    date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
      now.getDate()
    )}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }
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

    <label>Data:</label>
    <input type="datetime-local" id="dataEvento" value="${date}">

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
  `;

  Modal.abrir("Adicionar Evento", corpo, [
    {
      texto: "Adicionar",
      classe: "btn-azul",
      acao: () => {
        const evento = {
          id: Date.now().toString(),
          nome: document.getElementById("nomeEvento").value,
          data: document.getElementById("dataEvento").value,
          idCategoria: document.getElementById("selectCategoria").value,
          prioridade: document.getElementById("selectPrioridade").value,
          situacao: document.getElementById("selectSituacao").value,
        };

        if (
          !evento.nome ||
          !evento.data ||
          !evento.idCategoria ||
          !evento.prioridade ||
          !evento.situacao
        ) {
          alert("Por favor, preencha todos os campos");
          return;
        }

        appStore.dispatch(EVENTOS_TYPES.ADD, evento);
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
