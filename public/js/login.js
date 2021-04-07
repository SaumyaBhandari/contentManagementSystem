import axios from 'axios';

const login = (email, password) => {
  const spinner = document.getElementById('spinner-grow');

  const loginbtn = document.getElementById('login-btn');
  loginbtn.style.display = 'none';
  spinner.style.display = 'block';
  axios({
    method: 'POST',
    url: '/api/v1/users/login',
    data: {
      email,
      password,
    },
  })
    .then((res) => {
      if (res.data.status === 'success') {
        console.log(res.data);
        alert('logged in successfully');

        window.setTimeout(() => {
          location.assign('/');
        }, 1500);
      }
    })
    .catch((err) => {
      spinner.style.display = 'none';
      loginbtn.style.display = 'block';

      alert(err.response.data.message);
    });
};

export default login;
