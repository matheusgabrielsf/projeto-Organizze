# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Estudante</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários de 18 a 25 anos que conciliam aulas, estudos, estágio e vida pessoal.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Organizar horários de estudo,compromissos acadêmicos e momentos de lazer para evitar sobrecarga e perda de prazos.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Profissional em tempo integral</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários de 25 a 40 anos, com 
jornadas de 8 a 10 horas diárias, 
que precisam equilibrar trabalho, 
saúde, família e capacitação.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Gerenciar compromissos e prazos 
de forma eficiente, reduzindo 
esquecimentos e otimizando o 
tempo disponível. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Pessoa com múltiplas responsabilidades</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários de 30 a 50 anos que 
acumulam trabalho, estudos, 
responsabilidades familiares e 
cuidados pessoais.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Estruturar a rotina em categorias 
(trabalho, estudos, saúde, lazer) 
para equilibrar as demandas do 
cotidiano. </td>
</tr>
</tbody>
</table>

---

## Histórias de Usuários

| EU COMO... `QUEM`                      | QUERO/PRECISO ... `O QUÊ`                                                      | PARA ... `PORQUÊ`                                           |
| -------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| Estudante universitário                | Registrar meus horários de aula e estudo                                       | Visualizar minha rotina de forma clara e organizada         |
| Profissional em tempo integral         | Cadastrar reuniões e prazos de entrega                                         | Garantir que nenhum compromisso relevante seja esquecido    |
| Pessoa com múltiplas responsabilidades | Classificar minhas atividades por categorias (trabalho, estudos, saúde, lazer) | Obter melhor equilíbrio entre as demandas cotidianas        |
| Usuário do sistema                     | Acessar uma visão ampla do meu dia e semana                                    | Ter maior clareza no planejamento e organização das tarefas |

---

## Requisitos do Projeto

### Requisitos Funcionais

| ID        | Descrição                                                           | Prioridade |
| --------- | ------------------------------------------------------------------- | ---------- |
| RF-01     | A aplicação deve permitir registrar um usuário.                     | Alta       |
| RF-02     | A aplicação deve permitir usuário fazer login.                      | Alta       |
| RF-03     | A aplicação deve permitir gerenciar eventos.                        | Alta       |
| RF-04     | A aplicação deve permitir criar eventos recorrentes.                | Alta       |
| RF-05     | A aplicação deve permitir criar categorias.                         | Alta       |
| RF-06     | A aplicação deve exibir visualização de calendário mensal.          | Alta       |
| ~~RF-07~~ | ~~A aplicação deve exibir visualização de calendário semanal.~~     | ~~Baixa~~  |
| RF-08     | A aplicação deve exibir visualização de eventos diário              | Média      |
| RF-09     | A aplicação deve permitir filtrar eventos por título ou categorias. | Baixa      |
| RF-10     | A aplicação deve notificar sobre eventos próximos.                  | Baixa      |
| RF-11     | A aplicação deve permitir criar sessões de Pomodoro.                | Alta       |
| RF-12     | A aplicação deve exibir lista de todos os Pomodoros.                | Alta       |
| RF-13     | A aplicação deve notificar quando for hora da pausa.                | Média      |

**Prioridade: Alta / Média / Baixa.**

---

### Requisitos não Funcionais

| ID     | Descrição                                                                                                               | Prioridade |
| ------ | ----------------------------------------------------------------------------------------------------------------------- | ---------- |
| RNF-01 | A aplicação deve ser publicada em um ambiente acessível público na Internet                                             | Alta       |
| RNF-02 | A aplicação deve ser responsiva e adaptar-se adequadamente a diferentes tamanhos de tela (desktop, tablet, smartphone). | Baixa      |
| RNF-03 | A aplicação deve ter bom nível de contraste entre os elementos da tela.                                                 | Média      |
| RNF-04 | A aplicação deve ser compatível com os principais navegadores: Google Chrome, Firefox e Microsoft Edge.                 | Alta       |
| RNF-05 | A aplicação deve manter os dados persistidos localmente.                                                                | Alta       |

**Prioridade: Alta / Média / Baixa.**
