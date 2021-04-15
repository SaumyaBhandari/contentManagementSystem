const router = require('express').Router();
const courseController = require('../controllers/courseController');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');

router.route('/').get(courseController.getCourses, viewController.getOverview);
router.route('/login').get(courseController.getCourses, viewController.login);
router
  .route('/courses/:courseID')
  .get(courseController.getCourses, courseController.getSingleCourse);
router
  .route('/dashboard')
  .get(
    authController.protect,
    courseController.getCourses,
    viewController.dashboard
  );

module.exports = router;
