const AppError = require('./AppError');

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      console.log(
        '................ inside c a t c h a s y n c...............................'
      );
      next(err);
    });
  };
};
