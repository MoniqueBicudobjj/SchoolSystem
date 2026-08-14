Sobre o Projeto

O SchoolSystem é um sistema web desenvolvido para auxiliar no gerenciamento escolar, permitindo o controle de matrículas, notas, frequência, comunicação entre escola e responsáveis, além de disponibilizar informações acadêmicas para alunos e professores.

O projeto foi desenvolvido utilizando:
HTML
CSS
JavaScript

O objetivo principal é oferecer uma plataforma simples, intuitiva e organizada para o ambiente escolar.

Objetivos

O sistema busca:
1) Facilitar o gerenciamento de alunos e professores.
2) Organizar informações acadêmicas.
3) Automatizar cálculos de notas e médias.
4) Disponibilizar boletins online.
5) Controlar frequência escolar.
6) Centralizar avisos importantes da escola.
7) Realizar matrículas e rematrículas digitalmente.

Níveis de Acesso

O sistema possui diferentes tipos de usuários:

Usuário	Função
Administrador	Gerencia todo o sistema
Secretaria	Realiza matrículas e rematrículas
Professor	Lança notas e frequência
Aluno	Consulta boletim e avisos
Responsável	Acompanha o desempenho do aluno

Estrutura do Projeto

SchoolSystem/
 HTML/
aluno.html
 areadoprofessor.html
 cadastro.html
 professor.html
rematricula.html
 login.html

 CSS/
 aluno.css
areadoprofessor.css
 cadastro.css
 professor.css
 rematricula.css
login.css

 JS/
 aluno.js
 areadoprofessor.js
 cadastro.js
 professor.js
 rematricula.js
 login.js
 README.md

Página de Login
Arquivos
login.html
login.css
login.js
Funcionalidades
Campo de usuário.
Campo de senha.
Validação dos campos.
Simulação de autenticação.
Redirecionamento para o sistema.

 Tela de Matrícula
Arquivos
cadastro.html
cadastro.css
cadastro.js
Funcionalidades

Cadastro completo do aluno contendo:

Dados do Aluno
Nome completo
Data de nascimento
CPF
RG
Endereço
Telefone
Responsável Financeiro
Nome
CPF
Telefone
Responsável Pedagógico
Nome
CPF
Telefone
Informações Escolares
Série
Turma
Turno
Ano Letivo
Recursos
Validação de campos obrigatórios.
Cadastro via formulário.
Mensagem de confirmação.

Tela de Rematrícula
Arquivos
rematricula.html
rematricula.css
rematricula.js
Funcionalidades

Permite atualizar os dados do aluno para o próximo ano letivo.

Recursos
Atualização de turma.
Atualização de turno.
Atualização de responsáveis.
Confirmação de rematrícula.
 Área do Professor
Arquivos
professor.html
professor.css
professor.js
Funcionalidades

O professor possui acesso às informações da turma.
Recursos
Visualização dos alunos.
Cadastro de notas.
Registro de frequência.
Atualização de dados acadêmicos.

Diário de Classe
Arquivos
areadoprofessor.html
areadoprofessor.css
areadoprofessor.js
Funcionalidades

Controle de presença dos alunos.

Recursos
Lista de alunos.
Registro de presença.
Registro de falta.
Chamada rápida.
Salvamento dos dados.
 Área do Aluno
Arquivos
aluno.html
aluno.css
aluno.js
Funcionalidades

O aluno possui acesso às suas informações acadêmicas.

Boletim Online

Exibe:

Disciplinas.
Notas dos três trimestres.
Média automática.
Situação do aluno.
Situações
Média	Situação
≥ 7	Aprovado
≥ 5 e < 7	Recuperação
< 5	Reprovado

 Alteração de Notas
O sistema permite:

Habilitar edição das notas.
Alterar qualquer nota.
Recalcular médias automaticamente.
Atualizar situação do aluno.
Exemplo

Antes:
Matemática
8.0
8.5
9.0

Média = 8.5
Depois da alteração:
Matemática
4.0
5.0
5.0
Média = 4.7


Situação = Reprovado
 Controle de Frequência

Exibe:

Percentual de presença.
Barra de progresso.
Indicador visual.
Exemplo
Presença: 94%
 Mural de Avisos
Sistema de comunicação escolar.

Exemplos de Avisos
Reunião de responsáveis.
Feira Cultural.
Entrega de trabalhos.
Eventos escolares.
Comunicados da direção.

Tecnologias Utilizadas
HTML5

Utilizado para:
Estrutura das páginas.
Formulários.
Tabelas.
Navegação.

CSS3
Utilizado para:
Layout responsivo.
Estilização dos componentes.
Cards.
Tabelas.
Barra de frequência.
Timeline do mural.
JavaScript

Utilizado para:

Validação de formulários.
Edição de notas.
Cálculo automático de médias.
Alteração de situação do aluno.
Controle de frequência.
Interatividade do sistema.

 Funcionalidades Implementadas
Login
Cadastro de alunos
Rematrícula
Controle de responsáveis
Área do professor
Diário de classe
Boletim online
Edição de notas
Cálculo automático de médias
Controle de frequência
Mural de avisos
Layout responsivo
