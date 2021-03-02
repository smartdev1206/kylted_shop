const AppError = require('./../utils/appError');

const handleCastErrorDB = (err) => {
    const message = `Invalid path ${err.path}: ${err.value}`;
    return new AppError(message, 400);
};
const handleJWTError = () =>
    new AppError('Invalid Token. please log in again', 401);
//
const handleJWTExpiredError = () =>
    new AppError('Your token has expired! Please log in again', 401);
const handleDuplicateFieldsDB = (err) => {
    const value = err.keyValue.name;
    const message = `Duplicate field value:"${value}" . Please use another value!`;
    return new AppError(message, 400);
};
// const handleValidationErrorDB = (err) => {
//     const errors = Object.values(err.errors).map((el) => el.message);
//     const message = `Invalid input data. ${errors.join('. ')}`;
//     return new AppError(message, 400);
// };

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err, res) => {
    // Operational error , trusted error:send message to client
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
        // Programming or other unknown error: don't leak error ditails
    } else {
        // 1)Log error
        console.error('ERROR 🌋', err);

        // send generic message

        res.status(500).json({
            status: 'Failed',
            message: 'Something went very wrong',
        });
    }
};

module.exports = (err, req, res, next) => {
    // console.log(err.stack);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
        let error = { ...err };
        if (error.path === '_id') error = handleCastErrorDB(error);
        if (error.code === 11000) error = handleDuplicateFieldsDB(error);
        // if (error.errors.difficulty.name === 'ValidationError')
        //     console.log(error.errors.difficulty.name);
        // error = handleValidationErrorDB(error);
        if (error.name === 'JsonWebTokenError') error = handleJWTError();
        if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
        sendErrorProd(error, res);
    }
};
