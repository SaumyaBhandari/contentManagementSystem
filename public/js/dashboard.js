import courseTemplate from './courseTemplate';
import eventTemplate from './eventTemplate';
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
      deleteCourseBtn.addEventListener('click', (e) => {
        const courseID = deleteCourseBtn.getAttribute('data-courseid');
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
    }
  } else if (content === 'event') {
    const template = eventTemplate();
    dashBoardContainer.innerHTML = '';
    let node = document.createRange().createContextualFragment(template);
    dashBoardContainer.appendChild(node);

    const deleteEventBtn = document.getElementById('deleteEventBtn');

    // getting id of course that needs to be deleted
    if (deleteEventBtn) {
      deleteEventBtn.addEventListener('click', (e) => {
        const eventID = deleteEventBtn.getAttribute('data-eventID');
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
    }
  }
};

export default showContent;
