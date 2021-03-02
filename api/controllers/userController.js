const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');

const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');

// USERS

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOption = {
        expires: new Date(
            Date.now() + process.envJWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    if (process.env.NODE_ENV === 'production') cookieOption.secure = true;

    res.cookie('jwt', token, cookieOption);
    // remove the password from the output
    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        result: users.length,
        data: {
            users,
        },
    });
});

exports.disactivate = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
        status: 'success',
        data: null,
    });
});

exports.getUser = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) return next(new AppError('User not found', 404));

    createSendToken(user, 200, res);
});

exports.createUser = catchAsync(async (req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        // isAdmin: req.body.isAdmin,
        // isSeller: req.body.isSeller,
        passwordConfirm: req.body.passwordConfirm,
        passwordChangedAt: req.body.passwordChangedAt,
    });
    const createdUser = await user.save();
    createSendToken(createdUser, 200, res);
});

exports.updateUser = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isSeller = Boolean(req.body.isSeller);
        user.isAdmin = Boolean(req.body.isAdmin);
        // user.isAdmin = req.body.isAdmin || user.isAdmin;
        const updatedUser = await user.save();
        createSendToken(updatedUser, 200, res);
    } else {
        return next(new AppError('User Not Found', 404));
    }
});

exports.deleteUser = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (user) {
        if (user.role === 'Admin') {
            res.status(400).send({ message: 'Can Not Delete Admin User' });
            return;
        }
        res.send({ message: 'User Deleted' });
    } else {
        return next(new AppError('user not found', 404));
    }
});

exports.userProfile = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (user.isSeller) {
            user.seller.name = req.body.sellerName || user.seller.name;
            user.seller.logo = req.body.sellerLogo || user.seller.logo;
            user.seller.description =
                req.body.sellerDescription || user.seller.description;
        }
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
        createSendToken(updatedUser, 200, res);
    }
});

exports.isAdmin = (req, res, next) => {
    if (req.user && req.body.role === 'Admin') {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Admin Token' });
    }
};
exports.isSeller = (req, res, next) => {
    if (req.user && req.body.role === 'Seller') {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Seller Token' });
    }
};
exports.isSellerOrAdmin = (req, res, next) => {
    if (req.user && req.body.role) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Admin/Seller Token' });
    }
};
