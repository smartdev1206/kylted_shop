/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
const Product = require('../models/productModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// creating functions of getAllTours tours
exports.getAllProducts = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Product.find(), req.query)
        .filterProducts()
        .sort()
        .limitFields()
        .paginate();
    const products = await features.query;

    req.query.limit = 5000;
    delete req.query.page;

    const { brand } = req.query;
    delete req.query.brand;
    const brands = await new APIFeatures(Product.find(), req.query)
        .filterProducts()
        .query.distinct('brand')
        .sort();

    req.query.brand = brand;
    delete req.query.Sottocategorie;
    const subcategories = await new APIFeatures(Product.find(), req.query)
        .filterProducts()
        .query.distinct('Sottocategorie')
        .sort();

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products,
            subcategories,
            brands,
        },
    });
});

exports.getSizes = catchAsync(async (req, res, next) => {
    const idProduct = await Product.find().distinct('product_id');
    const sizes = await Product.find().distinct('models.size');
    res.status(200).json({
        status: 'success',
        data: {
            idProduct,
            sizes,
        },
    });
});

// creating functions of creating Tour tours
exports.createProduct = catchAsync(async (req, res, next) => {
    const newProduct = await Product.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            tour: newProduct,
        },
    });
});

// creating functions of getOneTour Tour tours
exports.getProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new AppError('No Product Found with that Id', 404));
    }

    res.status(200).json({
        status: 'success',
        result: product.length,
        data: {
            product,
        },
    });
});

exports.getProductSize = catchAsync(async (req, res, next) => {
    const productSize = await Product.findById(req.params.id);
    let Sizes;

    const { models } = productSize;
    models.forEach((model) => {
        if (model.size === 'NOSIZE') {
            return next(new AppError('No Product with that size found', 404));
        }
        // console.log(model);
        // const { size } = model.size;
        console.log(model.size);
        // eslint-disable-next-line no-unused-vars
        Sizes = model.size;
    });
    console.log(models);
    res.status(200).json({
        status: 'success',
        data: {
            productSize,
        },
    });
});
exports.getProductDetail = catchAsync(async (req, res, next) => {
    const productDetails = await Product.findById(req.params.models.id);
    if (!productDetails) {
        return next(new AppError('No Product Found with that Id', 404));
    }

    res.status(200).json({
        status: 'success',
        result: productDetails.length,
        data: {
            productDetails,
        },
    });
});
// creating functions of updating Tour tours
exports.updateProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!product) {
        return next(new AppError('No tour found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            product,
        },
    });
});

// creating functions of deleting Tour tours
exports.deleteProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        await product.remove();
        res.send({ message: 'Product Deleted' });
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

// get shoes for men

// Products by arrays

exports.getBrands = catchAsync(async (req, res, next) => {
    const brands = await Product.find().distinct('brand');
    res.status(200).json({
        status: 'success',
        data: {
            brands,
        },
    });
});

exports.getCategories = catchAsync(async (req, res, next) => {
    const categories = await Product.find().distinct('Categorie');
    res.status(200).json({
        status: 'success',
        data: {
            categories,
        },
    });
});
// get seasons

exports.getSeasons = catchAsync(async (req, res, next) => {
    const seasons = await Product.find().distinct('season');
    res.status(200).json({
        status: 'success',
        data: {
            seasons,
        },
    });
});

exports.getColors = catchAsync(async (req, res, next) => {
    const colors = await Product.find().distinct('color');
    res.status(200).json({
        status: 'success',
        data: {
            colors,
        },
    });
});

exports.getSottocategorie = catchAsync(async (req, res, next) => {
    const Sottocategorie = await Product.find().distinct('Sottocategorie');
    res.status(200).json({
        status: 'success',
        data: {
            Sottocategorie,
        },
    });
});
exports.getProductDetails = catchAsync(async (req, res, next) => {
    const productID = await Product.find().distinct('product_id');
    res.status(200).json({
        status: 'success',
        data: {
            productID,
        },
    });
});

exports.getProductsFilter = catchAsync(async (req, res, next) => {
    const name = req.query.name || '';
    const category = req.query.category || '';
    const product_id = req.query.product_id || '';
    const color = req.query.color || '';
    const model_size = req.query.model_size || '';

    const seller = req.query.seller || '';
    const order = req.query.order || '';
    const min =
        req.query.min && Number(req.query.min) !== 0
            ? Number(req.query.min)
            : 0;
    const max =
        req.query.max && Number(req.query.max) !== 0
            ? Number(req.query.max)
            : 0;

    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const sellerFilter = seller ? { seller } : {};
    const categoryFilter = category ? { category } : {};
    const product_idFilter = product_id ? { product_id } : {};
    const colorFilter = color ? { color } : {};
    const model_sizeFilter = model_size ? { model_size } : {};
    const priceFiltercost_no_tax =
        min && max ? { cost_no_tax: { $gte: min, $lte: max } } : {};
    const priceFilterstreet_price =
        min && max ? { street_price: { $gte: min, $lte: max } } : {};
    const priceFiltersuggested_price =
        min && max ? { suggested_price: { $gte: min, $lte: max } } : {};
    const priceFiltersell_price =
        min && max ? { sell_price: { $gte: min, $lte: max } } : {};
    const sortOrder =
        order === 'lowest'
            ? { price: 1 }
            : order === 'highest'
            ? { price: -1 }
            : order === 'toprated'
            ? { rating: -1 }
            : { _id: -1 };

    const products = await Product.find({
        ...sellerFilter,
        ...nameFilter,
        ...categoryFilter,
        ...priceFiltercost_no_tax,
        ...priceFilterstreet_price,
        ...priceFiltersuggested_price,
        ...priceFiltersell_price,
        ...product_idFilter,
        ...colorFilter,
        ...model_sizeFilter,
    })
        .populate('seller', 'seller.name seller.logo')
        .sort(sortOrder);
    res.status(200).json({
        status: 'success',
        result: products.length,
        data: {
            products,
        },
    });
});
