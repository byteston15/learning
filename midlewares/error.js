const errorHandler = (err, req, res, next) => {
    //log para el desarrollador
    console.log(err.stack);

    if(err.name === 'CastError'){

    };

    res.status(err.statusCode || 500).json({
        success : false,
        error : err.message || 'Server Error'
    });
};


module.exports = errorHandler;