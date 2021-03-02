const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const orderRoutes = require('./routes/orderRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(cors());
// 1) GROBAL MIDDLEWARE
// *) set security HTTP headers
app.use(helmet());

// DEVELOPMENT LOGGING
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// * LIMIT REQUEST FROM SAME API
const limiter = rateLimit({
    max: 500,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// BODY PARSER, READING DATA FROM BODY INTO REQ,BODY
app.use(express.json({ limit: '10kb' }));

// DATA SANATIZATION AGAINST NoSQL QUERY INJECTION
app.use(mongoSanitize());

// DATA SANATIZATION AGAINST XSS
app.use(xss());

// prevent parameter pollution
app.use(
    hpp({
        whitelist: ['color', 'brand', 'Sottocategorie', 'price', 'min', 'max', 'size'],
    })
);
// serving static files
app.use(express.static(`${__dirname}/public`));

// test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.headers);
    next();
});

//3) ROUTE

app.use('/api/v1/products', productRouter);
// app.use('/api/v1/products', shoesRoutes);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/orders', orderRoutes);
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
