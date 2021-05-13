import login from './login';
import axios from 'axios';

import showContent from './dashboard';

const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');

if (dashboard) {
  document.getElementById('dashboardBtn').addEventListener('click', (e) => {
    showContent('profile');
  });
  document.getElementById('courses').addEventListener('click', (e) => {
    console.log('inside eventlistner');
    showContent('course');
  });
  document.getElementById('event').addEventListener('click', (e) => {
    console.log('inside eventlistner');

    showContent('event');
  });
  document.getElementById('gallery').addEventListener('click', (e) => {
    console.log('inside eventlistner');

    showContent('gallery');
  });
}

if (loginForm) {
  // alert('login is running');
  loginForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    e.preventDefault();

    login(email, password);
  });
}

function deleteImage(imageID) {
  imageID = deleteImageBtn.getAttribute('data-imageID');
  axios({
    method: 'DELETE',
    url: '/api/v1/gallery/' + imageID,
  })
    .then((res) => {
      if (res.data.status === 'success') {
        console.log(res.data);
        alert('image deleted successfully');

        location.assign('/dashboard');
      }
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
}
