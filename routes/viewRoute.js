const router = require('express').Router();
const courseController = require('../controllers/courseController');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');
const eventController = require('../controllers/eventController');
const galleryController = require('../controllers/galleryController');

router.route('/').get(
  courseController.getCourses,
  (req, res, next) => {
    req.fromDashboard = true;
    next();
  },
  galleryController.getGallery,
  viewController.getOverview
);

router.use(courseController.getCourses);

router.route('/login').get(viewController.login);
router.route('/courses/:courseID').get(courseController.getSingleCourse);
router.route('/events').get(authController.protect, eventController.getEvents);
router.route('/gallery').get(galleryController.getGallery);
router.route('/events/:id').get(eventController.getSingleEvent);
router.route('/me').get(authController.protect, (req, res, next) => {
  res.render('profile', {
    title: 'my profile',
  });
});
router.route('/dashboard').get(
  authController.protect,
  authController.restrictTo('admin', 'superadmin'),
  (req, res, next) => {
    req.fromDashboard = true;
    next();
  },
  galleryController.getGallery,
  eventController.getEvents,

  viewController.dashboard
);
router.get('/logout', authController.logout);
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About Us',
  });
});

module.exports = router;
