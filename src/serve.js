require("express-async-errors");

const AppError = require('./utils/AppError');
const express = require('express');
const databaseConnection = require('./DB/sqlite/migrations/index.js');
const routes  = require('./routes/index.js');
const migrationsRuns = require('./DB/sqlite/migrations/index.js');

migrationsRuns()

const port = 3333;
const app = express() //como o express é uma função, então eu posso inicialrizá-lo
app.use(express.json()); //usar o express para entender requisições em json
app.use(routes);
databaseConnection();
app.use((error,request,response,next)=>{
      if(error instanceof AppError){
          return response.status(error.statusCode).json({
              status: 'error',
              message: error.message
          })
      }

        console.error(error);

      return response.status(500).json({
          status: 'error',
          message: 'Internal server error'
      })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    } )


//para lidar com errros preciso de uma blibioteca chamada express-async-errors