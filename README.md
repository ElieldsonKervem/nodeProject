# Projeto de Estudo Node.js com Express e SQLite

Este é um projeto simples desenvolvido com o propósito de estudar o desenvolvimento web com Node.js, utilizando o framework Express e o banco de dados SQLite.

## Objetivo

O objetivo deste projeto é compreender e praticar conceitos fundamentais de desenvolvimento web back-end, incluindo:

- Definição e manipulação de rotas utilizando o Express.
- Utilização de middleware para processamento de requisições HTTP.
- Conexão com banco de dados SQLite para armazenamento de dados.

## Configuração e Instalação

Para rodar este projeto localmente, siga estas etapas:

1. Clone o repositório para o seu ambiente de desenvolvimento:

git clone git@github.com:ElieldsonKervem/nodeProject.git

arduino
Copy code

2. Navegue até o diretório do projeto:

cd node

csharp
Copy code

3. Instale as dependências do projeto:

npm install

bash
Copy code

4. Inicie o servidor local:

npm start



5. Acesse o projeto no seu navegador web em `http://localhost:3333`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

├── README.md
├── package.json
├── package-lock.json
├── app.js
├── controllers/
│ └── mainController.js
├── models/
│ └── database.js
├── routes/
│ └── mainRoutes.js
└── views/
└── index.html

markdown
Copy code

- `app.js`: Arquivo principal que configura o servidor Express e define as rotas.
- `controllers/mainController.js`: Controlador responsável por implementar a lógica de negócio das rotas.
- `models/database.js`: Arquivo que estabelece a conexão com o banco de dados SQLite.
- `routes/mainRoutes.js`: Arquivo que define as rotas da aplicação.
- `views/index.html`: Página HTML de exemplo para ser servida pelo servidor.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, correções ou melhorias para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).