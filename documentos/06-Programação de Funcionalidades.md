# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas pelo grupo em HTML e CSS para cada uma das funcionalidades do sistema.

## Login (RF-02)

![Tela de Login](img/template-padrao/login.png)
_Figura 1 - Tela de Login_

#### Requisito atendido

- RF-02: A aplicação deve permitir usuário fazer login.

#### Artefatos da funcionalidade

- login.html
- login.css
- logo.png
- index.js
- image-1.png

#### Estrutura de Dados

```JSON
{
  "auth":
    {
      "id": "1",
      "nome": "João Silva",
      "email": "joao@mail.com",
      "senha": "senha123"
    },
}
```

## Registrar-se (RF-01)

![Tela de Registro](img/template-padrao/registrar.png)
_Figura 2 - Tela de Registro_

#### Requisito atendido

- RF-01: A aplicação deve permitir usuário se registrar.

#### Artefatos da funcionalidade

- registrar.html
- registrar.css
- logo.png
- index.js
- image-1.png

#### Estrutura de Dados

```JSON
{
  "usuarios": [
    {
      "id": "1",
      "nome": "João Silva",
      "email": "joao@mail.com",
      "senha": "senha123"
    },
  ]
}
```

## Home (RF-03, RF-08, RF-10, RF-12, RF-13)

![Tela Home](img/template-padrao/home.png)
_Figura 3 - Tela Home_

#### Requisitos atendidos

- RF-03: A aplicação deve permitir gerenciar eventos.
- RF-08: A aplicação deve exibir visualização de calendário diário.
- RF-10: A aplicação deve notificar sobre eventos próximos.
- RF-12: A aplicação deve exibir lista de todos os Pomodoros.
- RF-13: A aplicação deve notificar quando for hora da pausa.

#### Artefatos da funcionalidade

- home.html
- home.css
- logo.png
- index.js

#### Estrutura de Dados

```JSON
{
  "eventos": [
    {
      "id": "1",
      "idUsuario": "1",
      "nome": "Reunião de Trabalho",
      "dataHora": "2024-07-01T10:00",
      "idCategoria": "2",
      "prioridade": "ALTA",
      "situacao": "PENDENTE"
    },
  ],
  "timers": [
    {
      "id": "1",
      "idUsuario": "1",
      "nome": "Estudo de Matemática",
      "duracao": "25",
      "descanso": "5",
      "segundosRestantes": 150,
      "ciclo": "DESCANSO",
      "status": "EM_ANDAMENTO"
    },
  ]
}
```

## Agenda (RF-03, RF-04, RF-05, RF-06, RF-07, RF-08, RF-09, RF-10, RF-11, RF-12, RF-13)

![Tela Agenda](img/template-padrao/agenda.png)
_Figura 4 - Tela Agenda_

#### Requisitos atendidos

- RF-03: A aplicação deve permitir gerenciar eventos.
- RF-04: A aplicação deve permitir criar eventos recorrentes.
- RF-05: A aplicação deve permitir criar categorias.
- RF-06: A aplicação deve exibir visualização de calendário mensal.
- RF-07: A aplicação deve exibir visualização de calendário semanal.
- RF-08: A aplicação deve exibir visualização de calendário diário.
- RF-09: A aplicação deve permitir filtrar eventos por título ou categorias.
- RF-10: A aplicação deve notificar sobre eventos próximos.
- RF-11: A aplicação deve permitir criar sessões de Pomodoro.
- RF-12: A aplicação deve exibir lista de todos os Pomodoros.
- RF-13: A aplicação deve notificar quando for hora da pausa.

#### Artefatos da funcionalidade

- agenda.html
- agenda.css
- logo.png
- index.js

#### Estrutura de Dados

```JSON
{
  "eventos": [
    {
      "id": "1",
      "idUsuario": "1",
      "nome": "Reunião de Trabalho",
      "dataHora": "2024-07-01T10:00",
      "idCategoria": "2",
      "prioridade": "ALTA",
      "situacao": "PENDENTE"
    },
  ],
  "timers": [
    {
      "id": "1",
      "idUsuario": "1",
      "nome": "Estudo de Matemática",
      "duracao": "25",
      "descanso": "5",
      "segundosRestantes": 150,
      "ciclo": "DESCANSO",
      "status": "EM_ANDAMENTO"
    },
  ],
  "categorias": [
    {
      "id": "1",
      "idUsuario": "1",
      "nome": "Trabalho",
      "icon": "💼"
    },
  ],
  "eventosRecorrentes": [
    {
      "id": "1",
      "idUsuario": "1",
      "nome": "Reunião de Trabalho",
      "dataHora": "2024-07-01T10:00",
      "idCategoria": "2",
      "prioridade": "ALTA",
      "situacao": "PENDENTE",
      "diasSemana": [1,3,5]
    },
  ]
}
```
