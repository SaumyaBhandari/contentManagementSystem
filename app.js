const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
// const cors = require('cors');
const AppError = require('./utils/AppError');
const morgan = require('morgan');
const courseRoute = require('./routes/courseRoute');
const userRoute = require('./routes/userRoute');
const eventRoute = require('./routes/eventRoute');
const errorHandler = require('./controllers/errorController');
const authController = require('./controllers/authController');
const viewRoutes = require('./routes/viewRoute');
const galleryRoutes = require('./routes/galleryRoute');
const cookieParser = require('cookie-parser');
const router = require('./routes/galleryRoute');

app.use(morgan('dev'));

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
app.use('/api/v1/events', eventRoute);
app.use(
  '/api/v1/gallery',

  galleryRoutes
);
app.use('/api/v1/users', userRoute);
app.use('*', authController.isLoggedIn, (req, res, next) => {
  next(new AppError('Page not found', 404));
});

// using global error handler
app.use(errorHandler);

module.exports = app;
