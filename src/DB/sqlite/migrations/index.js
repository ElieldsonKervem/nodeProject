const sqlConnection = require("../../sqlite")
const createUsers = require("./creatUser")

async function migrationsRuns(){
   const schemas = [
    createUsers
   ].join('')

   sqlConnection().then((db)=> db.exec(schemas)).catch((err)=> console.log(err))
}

module.exports = migrationsRuns