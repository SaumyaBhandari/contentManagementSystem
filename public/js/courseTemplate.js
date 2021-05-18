function getCourseTemplate() {
  let courses = JSON.parse(
    document.getElementById('courses').getAttribute('data-courses')
  );
  let courseCard = courses.map((el, index) => {
    return `	
    <td>
    <div class="modal" id="mc${index}">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="text-center"> Delete Course</h3>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			<div class="modal-body">
			<h5>Are you sure you want to delete the course??</h5>
			</div>
		   
			<div class="modal-footer justify-content-center">
				<button id="deleteCourseBtn" data-courseid=${
          el.courseID
        } class="btn btn-success" style="width: 80px;">OK
				</button>
				<button class="btn btn-danger"data-dismiss="modal"style="width: 80px;">Cancel
				</button>
			  
			</div>
		</div>
	</div>
</div>
          
    <div class="modal" id="mymodel${index}">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="text-center"> Edit Course</h3>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <div class="modal-body">
            <form class="form-group font-weight-bold" method='POST' id = "updateCourseForm${index}" action='/api/v1/courses/update/${
      el._id
    }'>
            <label>Course Name:</label>
            <input type="text" style="width: 70%;float: right;"  name="name" value = '${
              el.name
            }'> <br>
            <label>Course Id:</label>
            <input type="text" style="width: 70%;float: right;"  name="courseID" value = '${
              el.courseID
            }'> <br>
            <label>Course Tag:</label>
            <input type="text" style="width: 70%;  float: right;" name="tag" value = '${
              el.tag
            }'>
            <label>Course Description:</label>
            <textarea form="updateCourseForm${index}" name="description"  style="width: 90%; height: 90px;">${
      el.description
    }</textarea>
            <label>Entry Requirement:</label>
            <textarea  form="updateCourseForm${index}" name = "entryRequirement" style="width: 90%; height: 90px;">${
      el.entryRequirement
    }</textarea>
            
            <div class="row font-weight-bold">
            <div class="row1 text-center" style="width: 30%;">
            <label>Year 1</label>
            <textarea form="updateCourseForm${index}" name="year1"  style="width: 90%; height: 90px;">${
      el.year1
    }</textarea>
            </div>
            <div class="row2 text-center" style="width: 30%;">
            <label>Year 2</label>
            <textarea form="updateCourseForm${index}" name="year2" style="width: 90%; height: 90px;">${
      el.year2
    }</textarea>
            </div>
            <div class="row3 text-center" style="width: 30%;">
            <label>Year 3</label>
            <textarea form="updateCourseForm${index}" name="year3"  style="width: 90%; height: 90px;">${
      el.year3
    }</textarea>
            
            </div>
        </div>
        
         <div class="modal-footer justify-content-center">
        <button class="btn btn-success" type= "submit" style="width: 80px;">OK
        </button>
        <button class="btn btn-danger"data-dismiss="modal"style="width: 80px;">Cancel
        </button>
        
        
        
            </div>
</form>
           
        </div>
    </div>
</div>
</td>
                           
                            <tr>
                                <td>${el.courseID}</td>
                                <td>${el.name}</td>
                                <td>${el.tag}</td>
                                    
                                        <td><button class="btn btn-success text-white" data-target="#mymodel${index}" data-toggle="modal" style="width: 90px;"> Edit </button>
                                        <div class="edit-icon">
                                        
                                          </div>
                                        </td>
                                        <td><button class="btn btn-success text-white" data-target="#mcd${index}" data-toggle="modal" style="width: 90px;"> ${
      el.publishStatus ? 'unpublish' : 'publish'
    } </button>
                                        <div class="edit-icon">
                                        
                                          </div>
                                        </td>
              
                                  
                                  
              
                                    
                                        <td>
                                        <div class="delete-icon">
                                        <button class="btn btn-danger text-white" data-target="#mc${index}" data-toggle="modal" style="width: 80px;"> Delete </button>
                                        
                                        </div>
                                        </td>
                                        <td>
                                        <div class="modal" id="mcd${index}">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h3 class="text-center"> ${
                                                      el.publishStatus
                                                        ? 'unpublish'
                                                        : 'publish'
                                                    } Course</h3>
                                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                <div class="modal-body">
                                                <h5>Are you sure you want to ${
                                                  el.publishStatus
                                                    ? 'unpublish'
                                                    : 'publish'
                                                } this course??</h5>
                                                </div>
                                               
                                                <div class="modal-footer justify-content-center">
                                               
                                                 <form class="form-group font-weight-bold" method='POST'  action='/api/v1/courses/update/${
                                                   el._id
                                                 }'>

                                                  <input style="display" value = "${
                                                    el.publishStatus
                                                      ? false
                                                      : true
                                                  }" name = "publishStatus"/>
                                                    <button type='submit' data-courseid=${
                                                      el.courseID
                                                    }
                                                    
                                                    class="btn btn-success" style="width: 80px;">OK
                                                    </button></form>
                                                    <button class="btn btn-danger"data-dismiss="modal"style="width: 80px;">Cancel
                                                    </button>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                      </td>
                            </tr>
                          
                      
                    
                `;
  });

  const courseTemplate = `	<div class="add-icon">
              <button class="btn btn-secondary text-white btn-sm" data-target="#mymodel" data-toggle="modal" style=" width: 50px;"> Add </button>
          
              <div class="modal" id="mymodel">
                  <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h3 class="text-center"> Add Course</h3>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>
          
                          <div class="modal-body">
                          <form method="POST" id="addCourseForm" action="/api/v1/courses" >
                        
                          <label>Course Name:</label>
                          <input type="text" style="width: 70%;float: right;"  name="name" value = ''> <br>
                          <label>Course Id:</label>
                          <input type="text" style="width: 70%;float: right;"  name="courseID" value = ''> <br>
                          <label>Course Tag:</label>
                          <input type="text" style="width: 70%;  float: right;" name="tag" value = ''>
                          <label>Course Description:</label>
                          <textarea form="addCourseForm" name="description"  style="width: 90%; height: 90px;"></textarea>
                          <label>Entry Requirement:</label>
                          <textarea  form="addCourseForm" name = "entryRequirement" style="width: 90%; height: 90px;"></textarea>
                          
                          <div class="row font-weight-bold">
                          <div class="row1 text-center" style="width: 30%;">
                          <label>Year 1</label>
                          <textarea form="addCourseForm" name="year1"  style="width: 90%; height: 90px;"></textarea>
                          </div>
                          <div class="row2 text-center" style="width: 30%;">
                          <label>Year 2</label>
                          <textarea form="addCourseForm" name="year2" style="width: 90%; height: 90px;"></textarea>
                          </div>
                          <div class="row3 text-center" style="width: 30%;">
                          <label>Year 3</label>
                          <textarea form="addCourseForm" name="year3"  style="width: 90%; height: 90px;"></textarea>
                          
                          </div>
                      </div>
                      
                       <div class="modal-footer justify-content-center">
                      <button class="btn btn-success" type= "submit" style="width: 80px;">OK
                      </button>
                      <button class="btn btn-danger"data-dismiss="modal"style="width: 80px;">Cancel
                      </button>
                      
                      
                      
                          </div>
          
                         
          </form></div>
                      </div>
                  </div>
              </div>
          </div>
          
          
          
          
              <section class="container text-left">
                  <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 ">
                  <table style="font-weight: bold;">
                  <tr>
                  <th>Course id</th>
                  <th>Course name</th>
                  <th>Course tag</th>
                  <th>Edit</th>
                  <th>Publish/Unpublish</th>
                  <th>Delete</th>
              </tr>
                      ${courseCard}

                      </table>
                      </div>
                  </div>
              </section>`;
  return courseTemplate;
}

export default getCourseTemplate;
