import courseTemplate from './courseTemplate';
import eventTemplate from './eventTemplate';
import galleryTemplate from './galleryTemplate';
import userTemplate from './userTemplate';
import axios from 'axios';
const showContent = (content) => {
  let dashBoardContainer = document.getElementById('dashBoardContainer');

  // for course dashboard
  if (content === 'course') {
    const template = courseTemplate();
    dashBoardContainer.innerHTML = '';
    let node = document.createRange().createContextualFragment(template);
    dashBoardContainer.appendChild(node);

    // delete course
    const deleteCourseBtn = document.getElementById('deleteCourseBtn');

    // getting id of course that needs to be deleted
    if (deleteCourseBtn) {
      document.querySelectorAll('#deleteCourseBtn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const courseID = btn.getAttribute('data-courseID');

          axios({
            method: 'DELETE',
            url: '/api/v1/courses/' + courseID,
          })
            .then((res) => {
              if (res.data.status === 'success') {
                console.log(res.data);
                alert('course deleted successfully');

                location.assign('/dashboard');
              }
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        });
      });
    }
  } else if (content === 'event') {
    const template = eventTemplate();
    dashBoardContainer.innerHTML = '';
    let node = document.createRange().createContextualFragment(template);
    dashBoardContainer.appendChild(node);

    const deleteEventBtn = document.getElementById('deleteEventBtn');

    // getting id of course that needs to be deleted
    if (deleteEventBtn) {
      document.querySelectorAll('#deleteEventBtn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const eventID = btn.getAttribute('data-eventID');

          axios({
            method: 'DELETE',
            url: '/api/v1/events/' + eventID,
          })
            .then((res) => {
              if (res.data.status === 'success') {
                console.log(res.data);
                alert('event deleted successfully');

                location.assign('/dashboard');
              }
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        });
      });
    }
  } else if (content === 'gallery') {
    const template = galleryTemplate();
    dashBoardContainer.innerHTML = '';
    let node = document.createRange().createContextualFragment(template);
    dashBoardContainer.appendChild(node);

    const deleteImageBtn = document.getElementById('deleteImageBtn');

    // getting id of course that needs to be deleted
    if (deleteImageBtn) {
      document.querySelectorAll('#deleteImageBtn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const imageID = btn.getAttribute('data-imageID');

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
        });
      });
    }
  } else if (content === 'profile') {
    let user = JSON.parse(
      document.getElementById('dashboardBtn').getAttribute('data-user')
    );
    const template = userTemplate(user);
    dashBoardContainer.innerHTML = '';
    let node = document.createRange().createContextualFragment(template);
    dashBoardContainer.appendChild(node);
  }
};

export default showContent;
