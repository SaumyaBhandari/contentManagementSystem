const router = require('express').Router();
const courseController = require('../controllers/courseController');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');
const eventController = require('../controllers/eventController');

router.route('/').get(courseController.getCourses, viewController.getOverview);
router.route('/login').get(courseController.getCourses, viewController.login);
router
  .route('/courses/:courseID')
  .get(courseController.getCourses, courseController.getSingleCourse);
router
  .route('/dashboard')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.getCourses,
    eventController.getEvents,
    viewController.dashboard
  );
router.get('/logout', authController.logout);

module.exports = router;
