import { appStore } from "./store/app-store.js";
import { EVENTOS_STATE_UPDATED } from "./store/types/eventos.types.js";

/**
 * Notifica sobre eventos próximos
 * Verifica a cada minuto se há eventos nos próximos 15 minutos
 */
const notificarEventosProximos = (eventos) => {
  const agora = new Date();
  const proximosMinutos = 15; // Notificar eventos nos próximos 15 minutos
  const proximasHoras = new Date(agora.getTime() + proximosMinutos * 60000);

  eventos.forEach((evento) => {
    // Parse da data do evento
    const dataEvento = new Date(evento.data);
    
    // Verificar se o evento está nos próximos 15 minutos
    if (dataEvento > agora && dataEvento <= proximasHoras) { 
      // Usar a API de notificações do navegador
      if ("Notification" in window && Notification.permission === "granted") {
        const tempoAte = Math.round((dataEvento - agora) / 60000); // em minutos
        new Notification("Evento Próximo!", {
          body: `${evento.nome} em ${tempoAte} minuto(s)`,
          icon: "/assets/img/icon.png",
          tag: `evento-${evento.id}`,
          requireInteraction: false,
        });
      }
    }
  });
};

/**
 * Solicita permissão para notificações do navegador
 */
const solicitarPermissaoNotificacoes = () => {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }
};

export const executeEvento = () => {
  let eventos = [...appStore.getState().eventos];

  // Solicitar permissão para notificações quando a aplicação inicia
  solicitarPermissaoNotificacoes();

  appStore.subscribe(EVENTOS_STATE_UPDATED, (_event, state) => {
    eventos = state.eventos;
  });

  // Verificar eventos próximos a cada minuto (60000 ms)
  setInterval(() => {
    notificarEventosProximos(eventos);
  }, 60000);

  // Fazer uma verificação imediata ao iniciar
  notificarEventosProximos(eventos);
};
