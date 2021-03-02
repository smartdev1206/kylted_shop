const express = require('express');
const authController = require('./../controllers/authController');
const OrderController = require('./../controllers/orderController');

const OrderRoutes = express.Router({
    mergeParams: true,
});

OrderRoutes.route('/')
    .get(
        authController.isAuth,
        authController.restrictTo('Admin', 'Seller'),
        OrderController.getAllOrders
    )
    .post(authController.isAuth, OrderController.createOrder);
OrderRoutes.route('/:id')
    .get(
        authController.restrictTo('Admin', 'Seller'),
        OrderController.getUserOrder
    )

    .delete(
        authController.isAuth,
        authController.restrictTo('Admin', 'Seller'),
        OrderController.deleteOrder
    );
module.exports = OrderRoutes;
