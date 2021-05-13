const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post(
  '/addUser',
  authController.protect,
  authController.restrictTo('superadmin'),
  authController.addAdmin
);

// router.route().get('/user/:id');

module.exports = router;
