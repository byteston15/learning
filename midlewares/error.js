const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    //cambiar el estado del mensaje de error
    error.message = err.message;

    //log para el desarrollador
    console.log(err.stack);

    if(err.name === 'CastError'){
       const message = `Recurso no encontrado con el id ${err.value}`;
      error = new ErrorResponse(message, 404);
    };

    res.status(error.statusCode || 500).json({
        success : false,
        error : error.message || 'Server Error'
    });
};


module.exports = errorHandler;