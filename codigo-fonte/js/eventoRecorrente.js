import { appStore } from "./store/app-store.js";
import { EVENTOS_TYPES } from "./store/types/eventos.types.js";
import { EVENTOS_RECORRENTE_STATE_UPDATED } from "./store/types/eventosRecorrente.types.js";

// Mapeamento dos dias da semana
const diasSemanaMap = {
  dom: 0,
  seg: 1,
  ter: 2,
  qua: 3,
  qui: 4,
  sex: 5,
  sab: 6,
};

const process = (eventoRecorrente) => {
  const eventos = [...appStore.getState().eventos];
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(hoje);

    currentDate.setDate(hoje.getDate() + i);

    const diaSemanaAtual = currentDate.getDay();

    const diaSelecionado = Object.entries(diasSemanaMap).find(
      ([key, value]) => value === diaSemanaAtual
    )?.[0];

    if (diaSelecionado && eventoRecorrente.dias.includes(diaSelecionado)) {
      const [hora, minuto] = eventoRecorrente.hora.split(":");
      currentDate.setHours(parseInt(hora), parseInt(minuto), 0, 0);

      const dataFormatada = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
        2,
        "0"
      )}T${String(currentDate.getHours()).padStart(2, "0")}:${String(
        currentDate.getMinutes()
      ).padStart(2, "0")}`;

      const eventoExiste = eventos.some(
        (evt) =>
          evt.nome === eventoRecorrente.nome &&
          evt.data === dataFormatada &&
          evt.isRecorrente === eventoRecorrente.id
      );

      if (!eventoExiste) {
        const novoEvento = {
          id: Date.now().toString(),
          nome: eventoRecorrente.nome,
          data: dataFormatada,
          idCategoria: eventoRecorrente.idCategoria,
          prioridade: eventoRecorrente.prioridade,
          situacao: eventoRecorrente.situacao,
          isRecorrente: eventoRecorrente.id,
        };

        appStore.dispatch(EVENTOS_TYPES.ADD, novoEvento);
      }
    }
  }
};

export function executeEventoRecorrente() {
  const eventosRecorrente = appStore.getState().eventosRecorrente || [];

  eventosRecorrente.forEach((eventoRecorrente) => {
    process(eventoRecorrente);
  });

  appStore.subscribe(EVENTOS_RECORRENTE_STATE_UPDATED, (_event, state) => {
    (state.eventosRecorrente || []).forEach((eventoRecorrente) => {
      process(eventoRecorrente);
    });
  });
}
