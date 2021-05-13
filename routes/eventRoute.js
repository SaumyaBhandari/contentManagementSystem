const router = require('express').Router();

const eventController = require('../controllers/eventController');
const authController = require('../controllers/authController');

router.use(
  authController.protect,
  authController.restrictTo('admin', 'superadmin')
);
router
  .route('/')
  .get(eventController.getEvents)
  .post(eventController.uploadCoverPhoto, eventController.addEvent);
router
  .route('/:id')
  .get(eventController.getSingleEvent)
  .delete(eventController.deleteEvent);

router.post(
  '/update/:id',

  eventController.uploadCoverPhoto,

  eventController.updateEvent
);

module.exports = router;
