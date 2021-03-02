const mongoose = require('mongoose');

// SCHEMA CODE

const productSchema = new mongoose.Schema({
    record_type: {
        type: String,
    },
    product_id: {
        type: String,
    },
    models: [
        {
            model_id: { type: String, required: true },
            size: { type: String, required: true },
            barcode: { type: String },
            model_quantity: { type: String, required: true },
        },
    ],
    model_id: String,
    brand: {
        type: String,
    },
    name: {
        type: String,
    },
    code: {
        type: String,
    },
    product_quantity: {
        type: Number,
    },
    cost_no_tax: {
        type: Number,
    },
    street_price: {
        type: Number,
    },
    suggested_price: {
        type: Number,
    },
    sell_price: {
        type: Number,
    },
    plain_description: {
        type: String,
    },
    weight: {
        type: Number,
    },
    picture_1: {
        type: String,
    },
    picture_2: String,
    picture_3: String,
    madein: {
        type: String,
    },
    Firme: {
        type: String,
    },
    heel: String,
    Produzione: String,
    Categorie: {
        type: String,
    },
    Sottocategorie: {
        type: String,
    },
    season: {
        type: String,
    },
    color: {
        type: String,
    },
    service: String,
    Warehouse2: String,
    Sunglasses: String,
    Watches: String,
    bicolors: {
        type: String,
    },
    Genere: {
        type: String,
    },
    Print: String,
    productname: String,
    barcode: String,
    model_size: String,
    model_quantity: String,
    picture_1_blob: String,
    picture_2_blob: String,
    picture_3_blob: String,
    Discount: Boolean,
    priceDiscount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
