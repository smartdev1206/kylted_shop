const express = require('express');
const authController = require('./../controllers/authController');

const userController = require('./../controllers/userController');

const router = express.Router({
    mergeParams: true,
});

router.post('/signup', userController.createUser);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
    '/updateMyPassword',
    authController.isAuth,
    authController.updatePassword
);
// router.put('/updateMe', authController.isAuth, userController.updateMe);
router.delete(
    '/disactivate',
    authController.isAuth,
    authController.restrictTo('Admin,Seller'),
    userController.disactivate
);
router.get(
    '/profile',
    authController.isAuth,
    authController.restrictTo('Admin,Seller'),
    userController.userProfile
);

router
    .route('/')
    .get(
        authController.isAuth,
        authController.restrictTo('Admin'),
        userController.getAllUsers
    )
    .post(authController.isAuth, userController.createUser);
router
    .route('/:id')
    .get(userController.getUser)
    .patch(
        authController.isAuth,
        authController.restrictTo('Admin'),
        userController.updateUser
    )
    .delete(
        authController.isAuth,
        authController.restrictTo('Admin'),
        userController.deleteUser
    );

module.exports = router;
