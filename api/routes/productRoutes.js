const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router({
    mergeParams: true,
});
const productController = require('./../controllers/productController');

// router.param('id', tourController.checkID);
// COLORS PRODUCT URLS

router.route('/brand').get(productController.getBrands);
router.route('/sizes').get(productController.getSizes);
router.route('/sottocategories').get(productController.getSottocategorie);
router.route('/categories').get(productController.getCategories);
router.route('/colors').get(productController.getColors);
router.route('/modelid').get(productController.getProductDetails);
router.route('/models/:id').get(productController.getProductDetail);

// POST/product/67272/models
router.route('/:id').get(productController.getProductSize);
router
    .route('/')
    .get(productController.getAllProducts)
    .post(
        authController.isAuth,
        authController.restrictTo('Admin', 'Seller'),
        productController.createProduct
    );
router
    .route('/:id')
    .get(productController.getProductSize)
    .patch(
        authController.isAuth,
        authController.restrictTo('Admin', 'Seller'),
        productController.updateProduct
    )
    .delete(
        authController.isAuth,
        authController.restrictTo('Admin', 'Seller'),
        productController.deleteProduct
    );

// navbar router

module.exports = router;
