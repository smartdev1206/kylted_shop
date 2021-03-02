/* eslint-disable camelcase */
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./../../models/productModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection successful!'));

// READ JSON FILE
let products = JSON.parse(
    fs.readFileSync(`${__dirname}/product.json`, 'utf-8')
);

const models = products.filter((product) => product.record_type === 'MODEL');
products = products.filter((product) => product.record_type === 'PRODUCT');

const models_id = [];

products = products.map((product) => {
    product.models = [];

    models.forEach((model) => {
        if (model.product_id === product.product_id) {
            const model_exists =
                models_id.filter((model_id) => model.model_id === model_id)
                    .length > 0;
            if (!model_exists) {
                const new_model = {};

                new_model.model_id = model.model_id;
                new_model.size = model.model_size;
                new_model.barcode = model.barcode;
                new_model.model_quantity = model.model_quantity;

                product.models.push(new_model);
                models_id.push(model.model_id);
            }
        }
    });

    // console.log(product);
    return product;
});

// console.log(products);

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Product.create(products);

        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
    try {
        await Product.deleteMany();

        console.log('Data successfully deleted!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// IMPORT DATA INTO DB
const importDataSize = async () => {
    try {
        await Product.create(products);

        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// DELETE ALL DATA FROM DB
const deleteDataSize = async () => {
    try {
        await Product.deleteMany();

        console.log('Data successfully deleted!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}

if (process.argv[2] === '--import') {
    importDataSize();
} else if (process.argv[2] === '--delete') {
    deleteDataSize();
}
