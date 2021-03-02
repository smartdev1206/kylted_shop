/* eslint-disable no-nested-ternary */
const Order = require('../models/orderModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// creating functions of getAllTours tours
exports.getAllOrders = catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Order.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const orders = await features.query;

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: orders.length,
        data: {
            orders,
        },
    });
});

// creating functions of creating Tour tours
exports.createOrder = catchAsync(async (req, res, next) => {
    const newNewOrder = await Order.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            tour: newNewOrder,
        },
    });
});

// creating functions of getOneTour Tour tours
exports.getUserOrder = catchAsync(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(new AppError('No tour Found with that Id', 404));
    }
    res.status(200).json({
        status: 'success',
        result: order.length,
        data: {
            order,
        },
    });
});

exports.deleteOrder = catchAsync(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        await order.remove();
        res.send({ message: 'Product Deleted' });
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

