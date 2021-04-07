import courseTemplate from './courseTemplate';
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
};

export default showContent;
