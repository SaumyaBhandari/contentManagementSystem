const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

mongoose

  // .connect('mongodb://localhost:27017/herald', {
  .connect('mongodb+srv://amrit:amrit123@cluster0.9tmuy.mongodb.net/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'))
  .catch((err) => {
    console.log('failed to connect with database');
  });

app.listen(process.env.PORT, () => {
  console.log('server is up and running \n Port:4000');
});
