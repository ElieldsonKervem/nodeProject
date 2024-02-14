const { Router } = require('express');

const userRouter = Router();
const UserController = require('../controllers/userCrotroller');

function middleware(resquest,response,next){
    if(resquest.body.userStatus === 'master'){
       next();
    }
    else{
        response.send('Você não tem permissão para criar um usuário');
    }

}

//precisamos ver sempre as exeções que podem acontecer 

const userControler = new UserController();
userRouter.post('/',middleware ,userControler.create);


module.exports = userRouter;