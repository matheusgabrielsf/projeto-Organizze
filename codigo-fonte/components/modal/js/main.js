import { EVENTOS_TYPES } from '../../../js/store/types/eventos.types.js';
import { EVENTOS_RECORRENTE_TYPES } from '../../../js/store/types/eventosRecorrente.types.js';
import { TIMERS_TYPES } from '../../../js/store/types/timers.types.js';
import { CATEGORIAS_TYPES } from '../../../js/store/types/categorias.types.js';
import { appStore } from '../../../js/store/app-store.js';
import { abrirModalAdicionar } from './modalAdicionarEvento.js';
import { abrirModalEditar } from './modalEditarEvento.js';
import { abrirModalAddEventoRecorrente } from './modalAddEventoRecorrente.js';
import { abrirModalEditEventoRecorrente } from './modalEditEventoRecorrente.js'
import { abrirModalAdicionarTimer } from './modalAdicionarTimer.js';
import { abrirModalEditarTimer } from './modalEditarTimer.js';
import { abrirModalAdicionarCategoria } from './modalAdicionarCategoria.js';
import { abrirModalEditarCategoria } from './modalEditarCategoria.js';
import { abrirModalListarEventoRecorrente } from './modalListarEventoRecorrente.js';
import { abrirModalListarCategorias } from './modalListarCategorias.js';

function atualizarListaEventos() {
  const tbody = document.getElementById("corpoTabela");
  const eventos = appStore.getState().eventos || [];

  tbody.innerHTML = eventos
    .map(
      (e) => `
      <tr class="linhaEvento">
        <td>${e.nome}</td>
        <td>${e.data}</td>
        <td>${e.categoria}</td>
        <td>${e.prioridade}</td>
        <td>${e.situacao}</td>
        <td>
          <button class="editarEvento" onclick="abrirEditar('${e.id}')">Editar</button>
        </td>
      </tr>
    `
    )
    .join("");

  if (eventos.length === 0) {
    tbody.innerHTML = `
      <td colspan="6" style="text-align:center; color:#555; padding: 12px;">
        Nenhum evento encontrado
      </td>
    `;
  }
}

function atualizarListaEventosRecorrentes() {
  const tbody = document.getElementById('corpoTabelaRecorrente');
  const eventosRecorrente = appStore.getState().eventosRecorrente || [];

  tbody.innerHTML = eventosRecorrente
    .map(
      (e) => `
      <tr class="linhaEvento">
        <td>${e.nome}</td>
        <td>${e.data}</td>
        <td>${e.categoria}</td>
        <td>${e.prioridade}</td>
        <td>${e.situacao}</td>
        <td>${e.dias?.join(', ') || '-'}</td>
        <td>
          <button class="EditarRecorrente" onclick="abrirEditarRecorrente('${e.id}')">Editar</button>
        </td>
      </tr>
    `
    )
    .join('');

  if (eventosRecorrente.length === 0){
    tbody.innerHTML = `
      <td colspan="6" style="text-align:center; color:#555; padding: 12px;">
        Nenhum evento encontrado
      </td>
    `;
  }
}

function atualizarListaTimers() {
  const tbody = document.getElementById("corpoTabelaTimers");
  const timers = appStore.getState().timers || [];

  tbody.innerHTML = timers
    .map(
      (t) => `
        <div class="cardTimer">
          <div class="card-timer-topo">
            <strong>${t.nome}</strong>
          </div>

          <div class="card-timer-info">
            <span><b>Duração:</b> ${t.duracao}</span>
            <span style="margin-left: 25px;"><b>Descanso:</b> ${
              t.descanso || "00:00"
            }</span>
          </div>

          <button class="btnPlayPause" onclick="iniciarPausarTimer('${t.id}')">
            <img src="" alt="Iniciar/Pausar">
          </button>
          
          <button class="editarEvento" onclick="abrirEditarTimer('${
            t.id
          }')">Editar</button>
        </div>
      `
    )
    .join("");

  if (timers.length === 0) {
    tbody.innerHTML = `
      <td colspan="4" style="text-align:center; color:#555; padding: 12px;">
        Nenhum timer cadastrado
      </td>
    `;
  }
}

function atualizarListaCategoria() {
  const tbody = document.getElementById('corpoTabelaCategoria');
  const categorias = appStore.getState().categorias || [];

  tbody.innerHTML = categorias
    .map(
      (e) => `
      <tr class="linhaCategoria">
        <td>${e.nome}</td>
        <td>
          <button onclick="abrirEditarCategoria('${e.id}')">Editar</button>
        </td>
      </tr>
    `
    )
    .join('');

  if (categorias.length === 0){
    tbody.innerHTML = `
      <td colspan="6" style="text-align:center; color:#555; padding: 12px;">
        Nenhum evento encontrado
      </td>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('abrirModalAdicionar')?.addEventListener('click', abrirModalAdicionar);
  document.getElementById('abrirModalAddEventoRecorrente')?.addEventListener('click', abrirModalAddEventoRecorrente);
  document.getElementById('abrirModalAdicionarTimer')?.addEventListener('click', abrirModalAdicionarTimer);
  document.getElementById('abrirModalAdicionarCategoria')?.addEventListener('click', abrirModalAdicionarCategoria);

  document.getElementById('abrirModalListarEventoRecorrente')?.addEventListener('click', () => {
    const eventosRecorrentes = appStore.getState().eventosRecorrente || [];
    abrirModalListarEventoRecorrente(eventosRecorrentes);
  });

  document.getElementById('abrirModalListarCategorias')?.addEventListener('click', () => {
    const categoria = appStore.getState().categorias|| [];
    abrirModalListarCategorias(categoria);
  });

  atualizarListaEventos();
  atualizarListaEventosRecorrentes();
  atualizarListaTimers();
  atualizarListaCategoria();

  appStore.subscribe(EVENTOS_TYPES.ADD, atualizarListaEventos);
  appStore.subscribe(EVENTOS_TYPES.UPDATE, atualizarListaEventos);

  appStore.subscribe(EVENTOS_RECORRENTE_TYPES.ADD, atualizarListaEventosRecorrentes);
  appStore.subscribe(EVENTOS_RECORRENTE_TYPES.UPDATE, atualizarListaEventosRecorrentes);
  
  appStore.subscribe(TIMERS_TYPES.ADD, atualizarListaTimers);
  appStore.subscribe(TIMERS_TYPES.UPDATE, atualizarListaTimers);
  
  appStore.subscribe(CATEGORIAS_TYPES.ADD, atualizarListaCategoria);
  appStore.subscribe(CATEGORIAS_TYPES.UPDATE, atualizarListaCategoria);
});

// Função global para abrir modal de edição de evento
window.abrirEditar = function (id) {
  const evento = appStore.getState().eventos.find((e) => e.id === id);
  if (!evento) return console.warn("Evento não encontrado:", id);
  abrirModalEditar(evento);
};

// Função global para abrir modal de edição de evento recorrente
window.abrirEditarRecorrente = function(id) {
  const eventosRecorrente = appStore.getState().eventosRecorrente || [];
  const eventoRecorrente = eventosRecorrente.find(e => e.id === id);

  if (!eventoRecorrente) return console.warn("Evento recorrente não encontrado:", id);

  abrirModalEditEventoRecorrente(eventoRecorrente);
};

// Função global para abrir modal de edição de Timer
window.abrirEditarTimer = function (id) {
  const timers = appStore.getState().timers || [];
  const timer = timers.find((t) => t.id === id);

  if (!timer) return console.warn("Timer não encontrado:", id);

  abrirModalEditarTimer(timer);
};

// Função global para abrir modal de edição de Categoria
window.abrirEditarCategoria = function(id) {
  const categorias = appStore.getState().categorias || [];
  const categoria = categorias.find(c => c.id === id);

  if (!categoria) {
    return console.warn("Categoria não encontrada:", id);
  }

  abrirModalEditarCategoria(categoria);
};
