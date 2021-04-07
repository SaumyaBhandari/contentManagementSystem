function getCourseTemplate() {
  let courses = JSON.parse(
    document.getElementById('courses').getAttribute('data-courses')
  );
  let courseCard = courses.map((el, index) => {
    return `	
          
                        
                           
                            <tr>
                                <td>${el.courseID}</td>
                                <td>${el.name}</td>
                                <td>${el.tag}</td>
                                    <div class="edit-icon">
                                        <td><button class="btn btn-success text-white" data-target="#mymodel${index}" data-toggle="modal" style="width: 70px;"> Edit </button></td>
              
                                        <div class="modal" id="mymodel${index}">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h3 class="text-center"> Edit Course</h3>
                                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    </div>
              
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="form-group font-weight-bold">
                                                                <label>Course Name:</label>
                                                                <input type="text" style="width: 70%; float: right;" value = '${el.name}'> <br>
                                                                <label>Course Tag:</label>
                                                                <input type="text" style="width: 70%; float: right;" value = '${el.tag}'>
                                                                <label>Course Description:</label>
                                                                <textarea form="form"  style="width: 90%; height: 90px;">${el.description}</textarea>
                                                                <label>Entry Requirement:</label>
                                                                <textarea  form="form" style="width: 90%; height: 90px;">${el.entryRequirement}</textarea>
                                                                <label>Select Course Year</label>
                                                                <select name = "dropdown">
                                                                    <option value = "Year-1" selected>Year-1</option>
                                                                    <option value = "Year-2">Year-2</option>
                                                                    <option value = "Year-3">Year-3</option>
                                                                </select>															
                                                                <div class="row font-weight-bold">
                                                                <div class="row1 text-center" style="width: 30%;">
                                                                <label>Module name</label>
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                </div>
                                                                <div class="row2 text-center" style="width: 30%;">
                                                                <label>Module Code</label>
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                </div>
                                                                <div class="row3 text-center" style="width: 30%;">
                                                                <label>Semester</label>
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                <input type="text" style="width: 90%;">
                                                                
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
              
                                                    <div class="modal-footer justify-content-center">
                                                        <button class="btn btn-success" style="width: 70px;">OK
                                                        </button>
                                                        <button class="btn btn-danger"data-dismiss="modal"style="width: 70px;">Cancel
                                                        </button>
                                                    </div>
              
                                                </div>
                                            </div>
                                        </div>
                                    </div>
              
                                    <div class="delete-icon">
                                        <td><button class="btn btn-danger text-white" data-target="#mymodel2" data-toggle="modal" style="width: 70px;"> Delete </button></td>
                                        <div class="modal" id="mymodel2">
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
                                                        <button id="deleteCourseBtn" data-courseid=${el.courseID} class="btn btn-success" style="width: 70px;">OK
                                                        </button>
                                                        <button class="btn btn-danger"data-dismiss="modal"style="width: 70px;">Cancel
                                                        </button>
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                            </tr>
                          
                      
                    
                `;
  });

  const courseTemplate = `	<div class="add-icon">
              <button class="btn btn-secondary text-white btn-sm" data-target="#mymodel" data-toggle="modal" style="margin-left: 85%; width: 50px;"> Add </button>
          
              <div class="modal" id="mymodel">
                  <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h3 class="text-center"> Add Course</h3>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>
          
                          <div class="modal-body">
                          <form method="POST" action="/api/v1/courses" >
                                  <div class="form-group font-weight-bold">
                                      <label>Course Id:</label>
                                      <input type="text" name="courseID" style="width: 70%; float: right;"> <br>
                                      <label>Course Name:</label>
                                      <input name="name" type="text" style="width: 70%; float: right;"> <br>
                                      <label>Course Tag:</label>
                                      <input name="tag" type="text" style="width: 70%; float: right;">
                                  </div>
                                  <div class="row font-weight-bold">
                                      <div class="row1 text-center" style="width: 30%;">
                                      <label>Year 1</label>
                                      <textarea form="form" style="width: 90%; height: 90px;"></textarea>
                                      </div>
                                      <div class="row2 text-center" style="width: 30%;">
                                      <label>Year 2</label>
                                      <textarea form="form" style="width: 90%; height: 90px;"></textarea>
                                      </div>
                                      <div class="row3 text-center" style="width: 30%;">
                                      <label>Year 3</label>
                                      <textarea form="form" style="width: 90%; height: 90px;"></textarea>
                                      
                                      </div>
                                  </div>
                               <div class="modal-footer justify-content-center">
                              <button type="submit" class="btn btn-success" style="width: 70px;">Adddd
                              </button>
                              <button class="btn btn-danger"data-dismiss="modal"style="width: 70px;">Cancel
                              </button>
                          </div>
                          </div>
          
                         
          </form>
                      </div>
                  </div>
              </div>
          </div>
          
          
          
          
              <section class="container text-left">
                  <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12 d-block">
                  <table style="font-weight: bold;">
                  <tr>
                  <th>Course id</th>
                  <th>Course name</th>
                  <th>Course tag</th>
                  <th>Edit</th>
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
