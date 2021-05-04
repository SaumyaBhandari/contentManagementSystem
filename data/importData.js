const fs = require('fs');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const User = require('../models/userModel');

// READ JSON FILE
const users = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    console.log('total users :' + users.length);
    console.log('importing data');
    await User.create(users);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    // await Tour.deleteMany();
    await User.deleteMany();
    // await Review.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

mongoose
  .connect('mongodb+srv://amrit:amrit123@cluster0.9tmuy.mongodb.net/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
    if (process.argv[2] === '--import') {
      importData();
    } else if (process.argv[2] === '--delete') {
      deleteData();
    }
  });
