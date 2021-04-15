const router = require('express').Router();
const courseController = require('../controllers/courseController');

router
  .route('/')
  .get(courseController.getCourses)
  .post(courseController.addCourse);
router
  .route('/:courseID')
  .get(courseController.getSingleCourse)
  .delete(courseController.deleteCourse);
router.post('/update/:courseID', courseController.updateCourse);

module.exports = router;
