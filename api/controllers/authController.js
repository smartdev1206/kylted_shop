const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { promisify } = require('util');
const User = require('./../models/userModel');
const Order = require('./../models/orderModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');

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

// exports.signup = catchAsync(async (req, res, next) => {
//     const newUser = await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         isAdmin: req.body.isAdmin,
//         isSeller: req.body.isSeller,
//         passwordConfirm: req.body.passwordConfirm,
//         passwordChangedAt: req.body.passwordChangedAt,
//     });
//     createSendToken(newUser, 201, res);
// });

exports.createOrder = catchAsync(async (req, res, next) => {
    const newOrder = await Order.create({
        orderItems: req.body.orderItems,
        shippingAdress: req.body.shippingAdress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxprice: req.body.taxprice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
    });
    createSendToken(newOrder, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = await req.body;

    // 1)check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    // 2) check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    // 3) if everything is ok , send    `
    createSendToken(user, 200, res);
});

exports.isAuth = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(
            new AppError('You are not login! Please log in to get access ', 401)
        );
    }

    //2 verification token

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    // console.log(decoded);

    //3 check if user still exist

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(new AppError('The user does no longer exist', 401));
    }
    //4 check if use changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(
            new AppError(
                'User recently changed password,Please login again',
                401
            )
        );
    }
    // grand access to protected router
    req.user = currentUser;
    next();
});

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        // roles ['admin','lead-guide'].role='user'
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError(
                    'You do not have permission to perform this action',
                    403
                )
            );
        }
        next();
    };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on posted email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(
            new AppError('There is no user with this email address.', 404)
        );
    }
    // 2)Generate the random reset

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
    // 3)send it to user's email
    const resetURL = `${req.protocol}://${req.get(
        'host'
    )}//api/v1/users/resetPassword/${resetToken}`;
    const message = `Forget your password? submit a Patch request with your new password and passwordconfirm to:${resetURL} \n If you didn't forget password please ignore this email!`;
    try {
        await sendEmail({
            email: user.email,
            subject: `Your password reset Token valid(valid for 10min)`,
            message,
        });
        res.status(200).json({
            status: 'success',
            message: 'Token send to email',
        });
    } catch (error) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });
        return next(
            new AppError(
                'There was an error sending email! try again later',
                500
            )
        );
    }
});
exports.resetPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on token
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gte: Date.now() },
    });
    // 2) Set a password if token has not expired, there is user,set the new password
    if (!user) {
        return next(new AppError('Token is invalid or has expired', 400));
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    // 3) update changedPasswordAt property for the user
    // 4) Log the user in, send JWT to the cliend
    createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
    // 1)Get the user from collection
    const user = await User.findById(req.user.id).select('+password');

    // 2) check if the posted password is correct
    if (
        !(await user.correctPassword(req.body.passwordCurrent, user.password))
    ) {
        return next(new AppError('Your current password is wrong', 401));
    }

    // 3) If so update the password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    // 4)Log user in, send JWT
    createSendToken(user, 200, res);
});

// authentication
