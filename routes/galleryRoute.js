const router = require('express').Router();
const authController = require('../controllers/authController');
const galleryController = require('../controllers/galleryController');

router
  .route('/')
  .get(galleryController.getGallery)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    galleryController.uploadPhotos,
    galleryController.updateGallery
  );

router
  .route('/:id')
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    galleryController.deleteImage
  );

module.exports = router;
