const router = require('express').Router();
const courseController = require('../controllers/courseController');

router
  .route('/')
  .get(courseController.getCourses)
  .post(courseController.addCourse);
router
  .route('/:courseID')
  .get(courseController.getSingleCourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;
