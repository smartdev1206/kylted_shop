const mongoose = require('mongoose');

const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION 🏜 Shutting Down');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB Connection sucessfull!'));

const app = require('./app');

// 4) START SERVER
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port} ......`);
});

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION 🏜 Shutting Down');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
