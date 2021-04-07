exports.getOverview = (req, res, next) => {
  console.log('in view controller ..............................');
  res.status(200).render('index', {});
};

exports.login = (req, res, next) => {
  console.log('in view controller ..............................');
  res.status(200).render('login');
};

exports.dashboard = (req, res, next) => {
  res.status(200).render('dashboard');
};
