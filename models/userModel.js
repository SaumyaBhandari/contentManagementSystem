const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

// defining schema for our user
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'userName is required'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'please provide your email address'],
    lowercase: true,
    validate: [validator.isEmail, 'please provide valid email address'],
  },
  phone: {
    type: String,
    minlength: 8,
  },
  picture: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['student', 'admin', 'superadmin'],
    default: 'student',
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    // required: 'please confirm your password',
    // validate:{
    //     validator:function (el){
    //         return el ===this.password
    //     },
    //     message:'you entered different passwords'
    // }
  },
});

schema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  // if case of signup first password is empty and new password does not match so this.isModified becomes true
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.confirmPassword = undefined;
  next();
});

schema.methods.checkPasswords = async function (givenPassword, actualPassword) {
  console.log('in method checkpasswords');
  return await bcrypt.compare(givenPassword, actualPassword);
};

// creating our model using abhove schema
const User = mongoose.model('User', schema);

module.exports = User;
