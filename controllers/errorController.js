module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  console.log('status code is : ', err.statusCode);
  console.log(err);
  console.log(err.stackTrace);

  if (err.statusCode === 401) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  res.status(err.statusCode).render('error', {
    statusCode: err.statusCode,
    message: err.message,

    title: 'Error',
  });
};
