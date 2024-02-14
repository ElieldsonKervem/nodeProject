class AppError{
    message;
    statusCode;

    constructor(message, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
    //essa classe vai ser a responsavel por lidar e tratar os erros da aplicação
}

module.exports = AppError;