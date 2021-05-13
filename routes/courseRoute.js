const router = require('express').Router();
const courseController = require('../controllers/courseController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(courseController.getCourses)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'superadmin'),
    courseController.addCourse
  );
router
  .route('/:courseID')
  .get(courseController.getSingleCourse)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'superadmin'),
    courseController.deleteCourse
  );

router.post(
  '/update/:id',
  authController.protect,
  authController.restrictTo('admin', 'superadmin'),
  courseController.updateCourse
);

module.exports = router;
