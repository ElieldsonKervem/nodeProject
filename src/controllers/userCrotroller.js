const {hash} = require('bcryptjs');
const AppError = require('../utils/AppError');
const sqlConnection = require("../DB/sqlite");

//
class UserController {
    //constroller vai ter no maximo 5 metodos
    // index  show  store  update  delete 

   async create(resquest, response) {
        const {name,email,password} = resquest.body;
         
        const passwordHash = await hash(password,8);

        const database =  await sqlConnection();
        const checkUserEmail = await database.get(
            "SELECT * FROM users WHERE email = (?)",[email]
        )

        if(checkUserEmail){
            throw new AppError("Email já cadastrado",400)
        }
        
        
        await database.run(
            "INSERT INTO users (name,email,password) VALUES (?,?,?)",
            [name,email,passwordHash]
        )

        return response.status(201).json({
            message: "Usuário criado com sucesso"
        })
        
    }
}


module.exports = UserController;