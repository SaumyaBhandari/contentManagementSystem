const AppError = require('../utils/AppError');
const User = require('../models/userModel');
const { promisify } = require('util');

const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };
  const user = await User.create(data);

  res.status(200).json({
    status: 'success',
    user,
  });
});
exports.addAdmin = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    role: req.body.role,
  };
  const user = await User.create(data);

  let redirectURL = `/dashboard`;
  console.log(redirectURL);
  res.status(200).render('success', {
    message: user.role + ' added successfully',
    redirectURL,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log('email : ' + email + 'password : ' + password);

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 401));
  }

  const user = await User.findOne({ email }).select('+password');

  console.log(user);
  if (!user || !(await user.checkPasswords(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  const token = jwt.sign({ id: user.id }, 'two plus two equals five');

  res.cookie('jwt', token);
  user.password = undefined;
  res.locals.user = user;
  res.status(200).json({
    status: 'success',
    user,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return next(
      new AppError('User not logged in ! please log in to get access', 401)
    );
  }

  const decoded = await promisify(jwt.verify)(
    token,
    'two plus two equals five'
  );

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError('User do not exists in this server anymore', 401));
  }

  req.user = currentUser;
  next();
});

exports.isLoggedIn = async (req, res, next) => {
  let token;

  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    res.locals.user = undefined;
    return next();
  }

  const decoded = jwt.verify(token, 'two plus two equals five');

  let currentUser;

  try {
    currentUser = await User.findById(decoded.id);
  } finally {
    if (!currentUser) {
      res.locals.user = undefined;
      return next();
    }

    res.locals.user = currentUser;

    return next();
  }
};
exports.logout = (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(Date.now() + 1000),
    httpOnly: false,
  });
  res.status(200).render('success', {
    message: 'logged out successfully',
    redirectURL: '/',
  });
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'lead-guide']. role='user'
    console.log('from restrict function');
    console.log(req.user);
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }

    next();
  };
};
