const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getUserBys = catchAsync(async (req, res, next) => {
  let token;

  const user = await User.findById();
});
