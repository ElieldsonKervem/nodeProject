// usamos node é muito utilizado para criar api, e fazer o backend de aplicações web

//rotas são caminhos dentro da aplicação de um ponto a um ponto 
//existe alguns metodos que precisamos usar com http para fazer a comunicação entre o cliente e o servidor

//vamos ver como funciona o v8 engine que foi desenvolvido em c++ v8 é usado fora do contexto do navegador

//as vezes podemos passsar com query params, lembrando que quando usamos query params os valores não são obrigatorios ja os router params são obrigatórios

//posso passar a responsabilidade de uma rota para um arquivo separado, para isso eu preciso exportar o arquivo e importar no arquivo principal

const {Router} = require('express');

const userRouter = require("./user.routes");

const routes = Router();

routes.use('/message', userRouter);

module.exports = routes;