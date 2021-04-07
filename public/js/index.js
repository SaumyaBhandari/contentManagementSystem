import login from './login';
import axios from 'axios';

import showContent from './dashboard';

const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');

if (dashboard) {
  document.getElementById('courses').addEventListener('click', (e) => {
    console.log('inside eventlistner');
    showContent('course');
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
