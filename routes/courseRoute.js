const router = require('express').Router();
const courseController = require('../controllers/courseController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(courseController.getCourses)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.addCourse
  );
router
  .route('/:courseID')
  .get(courseController.getSingleCourse)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.deleteCourse
  );

router.post(
  '/update/:courseID',
  authController.protect,
  authController.restrictTo('admin'),
  courseController.updateCourse
);

module.exports = router;
