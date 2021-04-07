const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const AppError = require('./utils/AppError');
const morgan = require('morgan');
const courseRoute = require('./routes/courseRoute');
const userRoute = require('./routes/userRoute');
const errorHandler = require('./controllers/errorController');
const authController = require('./controllers/authController');
const viewRoutes = require('./routes/viewRoute');
const cookieParser = require('cookie-parser');

app.use(morgan('dev'));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(helmet());
// app.use(cors({ credentials: true, origin: true }));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// using morgan for logging

// routes for our website

app.use('/', authController.isLoggedIn, viewRoutes);
app.use('/api/v1/courses', courseRoute);

app.use('/api/v1/users', userRoute);
app.use('*', (req, res, next) => {
  res.status(404).render('error', {
    title: 'error',
    message: 'Page not found',
    user: undefined,
    courses: undefined,
  });
});

// using global error handler
app.use(errorHandler);

module.exports = app;
