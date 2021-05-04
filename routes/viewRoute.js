const router = require('express').Router();
const courseController = require('../controllers/courseController');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');
const eventController = require('../controllers/eventController');

router.route('/').get(courseController.getCourses, viewController.getOverview);

router.use(courseController.getCourses);

router.route('/login').get(viewController.login);
router.route('/courses/:courseID').get(courseController.getSingleCourse);
router.route('/dashboard').get(
  authController.protect,
  authController.restrictTo('admin'),

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
