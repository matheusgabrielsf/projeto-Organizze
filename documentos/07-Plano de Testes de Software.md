# Plano de Testes de Software

| Caso de Teste         | CT-01 - Navegabilidade para efetuar Login                                  |
| :-------------------- | :------------------------------------------------------------------------- |
| Requisitos Associados | RF-02 - A aplicação deve permitir usuário fazer login.                     |
| Objetivo do Teste     | Visualizar a Home após inserir os dados corretamente para efetuar o login. |
|                       |                                                                            |
| Passos                | 1) Acessar o Navegador.                                                    |
|                       | 2) Informar o endereço do Site.                                            |
|                       | 3) Visualizar a página de Login.                                           |
|                       | 4) Inserir os dados corretamente.                                          |
|                       | 5) Acionar a opção “Acessar”.                                              |
| Critérios de êxito    | 1) O login deverá ser efetuado apenas com informações corretas.            |
|                       | 2) Ao clicar em “Acessar” deverá ser redirecionado para a Home.            |

| Caso de Teste         | CT-02 – Cadastro de usuário                                               |
| :-------------------- | :------------------------------------------------------------------------ |
| Requisitos Associados | RF-01 - A aplicação deve permitir registrar um usuário.                   |
| Objetivo do Teste     | Efetuar com êxito o cadastro de um novo usuário.                          |
|                       |                                                                           |
| Passos                | 1) Acessar o Navegador.                                                   |
|                       | 2) Informar o endereço do Site.                                           |
|                       | 3) Visualizar a página de Login.                                          |
|                       | 4) Acionar o botão "cadastro".                                            |
|                       | 5) Preencher todos os campos obrigatórios corretamente.                   |
|                       | 6) Acionar o botão "Cadastrar" ao finalizar o preenchimento dos campos.   |
| Critérios de êxito    | 1) Todos os campos do cadastro deverão ser preenchidos corretamente.      |
|                       | 2) Ao clicar em "Cadastrar" deverá ser redirecionado para a página Login. |

| Caso de Teste         | CT-03 – Criação de evento                                                |
| :-------------------- | :----------------------------------------------------------------------- |
| Requisitos Associados | RF-03 - A aplicação deve permitir gerenciar eventos.                     |
| Objetivo do Teste     | Verificar a criação de um novo evento na agenda.                         |
|                       |                                                                          |
| Passos                | 1) Acessar o Navegador.                                                  |
|                       | 2) Informar o endereço do Site.                                          |
|                       | 3) Realizar login com credenciais válidas.                               |
|                       | 4) Acessar a página de agenda.                                           |
|                       | 5) Clicar no botão de adicionar evento.                                  |
|                       | 6) Preencher título, data, horário e categoria do evento.                |
|                       | 7) Acionar o botão "Salvar".                                             |
| Critérios de êxito    | 1) O evento deve ser criado com as informações preenchidas.              |
|                       | 2) O evento deve aparecer na visualização do calendário na data correta. |

| Caso de Teste         | CT-04 – Edição de evento                                             |
| :-------------------- | :------------------------------------------------------------------- |
| Requisitos Associados | RF-03 - A aplicação deve permitir gerenciar eventos.                 |
| Objetivo do Teste     | Verificar a edição de um evento existente.                           |
|                       |                                                                      |
| Passos                | 1) Acessar o Navegador.                                              |
|                       | 2) Informar o endereço do Site.                                      |
|                       | 3) Realizar login com credenciais válidas.                           |
|                       | 4) Acessar a página de agenda.                                       |
|                       | 5) Selecionar um evento existente.                                   |
|                       | 6) Clicar na opção de editar.                                        |
|                       | 7) Modificar as informações desejadas.                               |
|                       | 8) Acionar o botão "Salvar".                                         |
| Critérios de êxito    | 1) O evento deve ser atualizado com as novas informações.            |
|                       | 2) As alterações devem ser refletidas na visualização do calendário. |

| Caso de Teste         | CT-05 – Exclusão de evento                           |
| :-------------------- | :--------------------------------------------------- |
| Requisitos Associados | RF-03 - A aplicação deve permitir gerenciar eventos. |
| Objetivo do Teste     | Verificar a exclusão de um evento da agenda.         |
|                       |                                                      |
| Passos                | 1) Acessar o Navegador.                              |
|                       | 2) Informar o endereço do Site.                      |
|                       | 3) Realizar login com credenciais válidas.           |
|                       | 4) Acessar a página de agenda.                       |
|                       | 5) Selecionar um evento existente.                   |
|                       | 6) Clicar na opção de excluir.                       |
| Critérios de êxito    | 1) O evento deve ser removido da agenda.             |
|                       | 2) O evento não deve mais aparecer no calendário.    |

| Caso de Teste         | CT-06 – Criação de evento recorrente                                 |
| :-------------------- | :------------------------------------------------------------------- |
| Requisitos Associados | RF-04 - A aplicação deve permitir criar eventos recorrentes.         |
| Objetivo do Teste     | Verificar a criação de eventos que se repetem periodicamente.        |
|                       |                                                                      |
| Passos                | 1) Acessar o Navegador.                                              |
|                       | 2) Informar o endereço do Site.                                      |
|                       | 3) Realizar login com credenciais válidas.                           |
|                       | 4) Acessar a página de agenda.                                       |
|                       | 5) Clicar no botão de adicionar evento.                              |
|                       | 6) Preencher as informações do evento.                               |
|                       | 7) Marcar a opção "Evento recorrente".                               |
|                       | 8) Definir a frequência de repetição.                                |
|                       | 9) Acionar o botão "Salvar".                                         |
| Critérios de êxito    | 1) O evento deve ser criado com a recorrência definida.              |
|                       | 2) O evento deve aparecer em múltiplas datas conforme a recorrência. |

| Caso de Teste         | CT-07 – Criação de categoria                                     |
| :-------------------- | :--------------------------------------------------------------- |
| Requisitos Associados | RF-05 - A aplicação deve permitir criar categorias.              |
| Objetivo do Teste     | Verificar a criação de categorias personalizadas para eventos.   |
|                       |                                                                  |
| Passos                | 1) Acessar o Navegador.                                          |
|                       | 2) Informar o endereço do Site.                                  |
|                       | 3) Realizar login com credenciais válidas.                       |
|                       | 4) Acessar a opção de gerenciar categorias.                      |
|                       | 5) Clicar no botão de adicionar categoria.                       |
|                       | 6) Acionar o botão "Salvar".                                     |
| Critérios de êxito    | 1) A categoria deve ser criada com as informações fornecidas.    |
|                       | 2) A categoria deve estar disponível ao criar ou editar eventos. |

| Caso de Teste         | CT-08 – Visualização de calendário mensal                          |
| :-------------------- | :----------------------------------------------------------------- |
| Requisitos Associados | RF-06 - A aplicação deve exibir visualização de calendário mensal. |
| Objetivo do Teste     | Verificar a exibição correta do calendário no formato mensal.      |
|                       |                                                                    |
| Passos                | 1) Acessar o Navegador.                                            |
|                       | 2) Informar o endereço do Site.                                    |
|                       | 3) Realizar login com credenciais válidas.                         |
|                       | 4) Acessar a página de agenda.                                     |
| Critérios de êxito    | 1) O calendário deve exibir todos os dias do mês atual.            |
|                       | 2) Os eventos cadastrados devem aparecer nos dias correspondentes. |

| Caso de Teste         | CT-11 – Filtro de eventos por título                                        |
| :-------------------- | :-------------------------------------------------------------------------- |
| Requisitos Associados | RF-09 - A aplicação deve permitir filtrar eventos por título ou categorias. |
| Objetivo do Teste     | Verificar a funcionalidade de busca de eventos pelo título.                 |
|                       |                                                                             |
| Passos                | 1) Acessar o Navegador.                                                     |
|                       | 2) Informar o endereço do Site.                                             |
|                       | 3) Realizar login com credenciais válidas.                                  |
|                       | 4) Acessar a página de agenda.                                              |
|                       | 5) Utilizar o campo de busca.                                               |
|                       | 6) Digitar o título ou parte do título do evento.                           |
| Critérios de êxito    | 1) Apenas eventos com o título correspondente devem ser exibidos.           |
|                       | 2) A busca deve ser realizada em tempo real ou ao pressionar Enter.         |

| Caso de Teste         | CT-12 – Filtro de eventos por categoria                                     |
| :-------------------- | :-------------------------------------------------------------------------- |
| Requisitos Associados | RF-09 - A aplicação deve permitir filtrar eventos por título ou categorias. |
| Objetivo do Teste     | Verificar a funcionalidade de filtro de eventos por categoria.              |
|                       |                                                                             |
| Passos                | 1) Acessar o Navegador.                                                     |
|                       | 2) Informar o endereço do Site.                                             |
|                       | 3) Realizar login com credenciais válidas.                                  |
|                       | 4) Acessar a página de agenda.                                              |
|                       | 5) Selecionar uma ou mais categorias no filtro.                             |
| Critérios de êxito    | 1) Apenas eventos das categorias selecionadas devem ser exibidos.           |
|                       | 2) Ao desmarcar o filtro, todos os eventos devem voltar a ser exibidos.     |

| Caso de Teste         | CT-13 – Notificação de eventos próximos                            |
| :-------------------- | :----------------------------------------------------------------- |
| Requisitos Associados | RF-10 - A aplicação deve notificar sobre eventos próximos.         |
| Objetivo do Teste     | Verificar se as notificações de eventos são exibidas corretamente. |
|                       |                                                                    |
| Passos                | 1) Acessar o Navegador.                                            |
|                       | 2) Informar o endereço do Site.                                    |
|                       | 3) Realizar login com credenciais válidas.                         |
|                       | 4) Criar um evento próximo ao horário atual.                       |
|                       | 5) Aguardar o horário de notificação do evento.                    |
| Critérios de êxito    | 1) Uma notificação deve ser exibida antes do horário do evento.    |
|                       | 2) A notificação deve conter o título e horário do evento.         |

|Requisitos associados| RF-11  | A aplicação deve permitir criar sessões de Pomodoro.  
| Objetivo do Teste     | Criar um timer pomodoro, para que o usuario consiga ter foco durante suas atividades.              |
|                       |                                                                             |
| Passos                | 1) Acessar o Navegador.                                                     |
|                       | 2) Informar o endereço do Site.                                             |
|                       | 3) Realizar login com credenciais válidas.                                  |
|                       | 4) Acessar a página home.                                              |
|                       | 5) Clicar no icone para para adicionar timer.                             |
| Critérios de êxito    | 1) Preencer todos os campos, incluindo nome, duração e descanso.           |
|                       | 2) Adicione o modal clicando em "Salvar".     |

| Caso de Teste         | CT-11 – Criação e visualização de timers                           |
| :-------------------- | 

| Caso de Teste         | CT-14 – Notificação dos Timers                            |
| :-------------------- | :----------------------------------------------------------------- |
| Requisitos Associados | RF-13 - A aplicação deve notificar quando for a hora da pausa.     |
| Objetivo do Teste     | Verificar se as notificações de timers são exibidas corretamente.  |
|                       |                                                                    |
| Passos                | 1) Acessar o Navegador.                                            |
|                       | 2) Informar o endereço do Site.                                    |
|                       | 3) Realizar login com credenciais válidas.                         |
|                       | 4) Criar um timer com o tempo desejado.                            |
|                       | 5) Aguardar o horário de notificação do timer.                     |
| Critérios de êxito    | 1) Uma notificação deve ser exibida quando o tempo terminar.       |
|                       | 2) A notificação deve informar qual timer foi concluido.           |

