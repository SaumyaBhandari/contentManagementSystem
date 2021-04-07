const router = require('express').Router();
const courseController = require('../controllers/courseController');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController', {
  courses: undefined,
});

router.route('/').get(courseController.getCourses, viewController.getOverview);
router.route('/login').get(courseController.getCourses, viewController.login);
router
  .route('/dashboard')
  .get(
    authController.protect,
    courseController.getCourses,
    viewController.dashboard
  );

module.exports = router;
