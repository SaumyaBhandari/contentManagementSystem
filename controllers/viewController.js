const AppError = require('../utils/AppError');

exports.getOverview = (req, res, next) => {
  console.log('in view controller ..............................');
  res.status(200).render('index', {
    title: ' Learning redefined ',
  });
};

exports.login = (req, res, next) => {
  console.log('in view controller ..............................');
  res.status(200).render('login', {
    title: 'Login',
  });
};

exports.dashboard = (req, res, next) => {
  try {
    res.status(200).render('dashboard', {
      title: 'Dashboard',
    });
  } catch (err) {
    next(new AppError(err.message, 500));
  }
};
