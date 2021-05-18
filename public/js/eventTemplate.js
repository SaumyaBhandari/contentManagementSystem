function eventTemplate() {
  let events = JSON.parse(
    document.getElementById('event').getAttribute('data-events')
  );

  console.log(events);

  const eventCard = events.map((el, index) => {
    let date = undefined;
    if (el.startDate) {
      const a = new Date(el.startDate);

      date = a.toISOString().split('T')[0];
    }

    return `   
    <div
      class="card text-dark mb-3 font-weight-bold mt-2"
      
    >
      <div
        class="card-header"
        style="
          background-color: #21b6a8;
          color: white;
          float: right;
          max-height: 60px;
        "
      >
        <i class="fa fa-fw fa-bell" color="white"></i> ${el.noticeType}

        <button
          class="btn btn-danger text-white btn-md"
          data-target="#delete${index}"
          data-toggle="modal"
          style="float: right; margin: 3px; width: 8%"
        >
          <i class="fa fa-fw fa-times font-weight-bold" color="white"></i>
        </button>
        <div class="modal" id="delete${index}">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="text-center text-dark">Delete Events</h3>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <h5 class="text-dark text-center font-weight-bold">
                  Are you sure you want to delete the Event?
                </h5>
              </div>

              <div class="modal-footer justify-content-center">
                <button class="btn btn-success"  data-eventID = ${
                  el._id
                } id = "deleteEventBtn">
                  OK
                </button>
                <button
                  class="btn btn-danger"
                  data-dismiss="modal"
                  
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          class="btn btn-success text-white btn-md"
          data-target="#ejj${index}"
          data-toggle="modal"
          style="float: right; margin: 3px; width: 11%"
        >
        ${el.publishStatus ? 'Unpublish' : 'Publish'}
        
        </button>
        <div class="modal" id="ejj${index}">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="text-center text-dark">${
                el.publishStatus ? 'Unpublish' : 'Publish'
              } Event</h3>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <h5 class="text-dark text-center font-weight-bold">
                Are you sure you want to ${
                  el.publishStatus ? 'Unpublish' : 'Publish'
                } the Event?
              </h5>
            </div>

            <div class="modal-footer justify-content-center">
            <form  method='POST'  id = "" action='/api/v1/events/update/${
              el._id
            }'>
            <input style="display:none" name="publishStatus" value="${
              el.publishStatus ? false : true
            }" />
              <button class="btn btn-success" style="width:100px" type="submit"  data-eventID = ${
                el._id
              } id = "">
              ${el.publishStatus ? 'Unpublish' : 'Publish'}
              </button>
              </form>
              <button
                class="btn btn-danger"
                data-dismiss="modal"
                
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>



        <button
          class="btn btn-success text-white btn-md"
          data-target="#edit${index}"
          data-toggle="modal"
          style="float: right; margin: 3px; width: 8%"
        >
        <i class="fas fa-pencil-alt"></i>
        </button>

        <div class="modal" id="edit${index}">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="text-center text-dark">Edit Event</h3>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
              <form  method='POST' enctype= "multipart/form-data" id = "updateEventForm${index}" action='/api/v1/events/update/${
      el._id
    }'>
            <div class="form-group font-weight-bold">
              <div class="nav-item dropdown">
            

                <select style="margin-bottom:20px" class=" nav-link dropdown-toggle "  name = "noticeType" id="noticeType">
                <i class="fa fa-fw fa-bell"></i>
  <option value="Academic Event">Academic Event</option>
  <option dropdown-item value="Non Academic Event">Non Academic Event</option>

</select>


                
              </div>
              <input
              form="updateEventForm${index}"
              name= "name"
              value="${el.name}"
              style="width: 50%; height: 40px"
            ></input>
            <textarea
              form="updateEventForm${index}"
              name="description"
              
              style="width: 90%; height: 70px"
            >${el.description}</textarea>
             

              <div>
              <img style="width:200px;height:200px;" src="/images/events/${
                el.coverPhoto
              }" alt="img" >
                <input type="file" name="coverPhoto" form = "updateEventForm${index}" id="img"  accept="image/*">
              </div>

              <div class="event-date mt-4 mb-4">
                <label>Event Date:</label>
                <input
                  type="date"
                  size="30"
                  name="startDate"
                  class="form-control"
                  value = "${date}"
                  id="datepicker"
                  style="width: 60%; float: right; margin-right: 15%"
                />
              </div>

              <label class="text-dark">Location:</label>
              <input
              type="text"
                
            value="${el.location}"
                name = "location"
              
                style="
                  width: 60%;
                  float: right;
                  margin-right: 15%;
                  height: 40px;
                "
              ></input>
            </div> <div class="modal-footer justify-content-center">
          <button class="btn btn-success" >Edit</button>
          <button
            class="btn btn-danger"
            data-dismiss="modal"
            
          >
            Cancel
          </button>
        </div>
                </form>
               
              </div>

             
            </div>
          </div>
        </div>
      </div>

      <div class="card-body bg-light">
        <h5 class="card-title">${el.name}</h5>
        <p class="card-text">
          ${el.description}
        </p>
      </div>
    </div>
`;
  });

  const eventTemplate = `
<div class="add-icon">
  <button
    class="btn btn-secondary text-white btn-md"
    data-target="#mymodel"
    data-toggle="modal"
    style=" width: 50px"
  >
    Add
  </button>

  <div class="modal" id="mymodel">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="text-center">Add Events</h3>
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
        </div>

        <div class="modal-body">
          <form  method='POST' enctype= "multipart/form-data" id = "addEventForm" action='/api/v1/events'>
            <div class="form-group font-weight-bold">
              <div class="nav-item dropdown">
            

                <select style="margin-bottom:20px" class=" nav-link dropdown-toggle " form = "addEventForm" name = "noticeType" id="noticeType">
                <i class="fa fa-fw fa-bell"></i>
  <option value="Academic Event">Academic Event</option>
  <option dropdown-item value="Non Academic Event">Non Academic Event</option>

</select>


                
              </div>

              <input
                form="addEventForm"
                name= "name"
                placeholder="TITLE OF EVENTS"
                style="width: 50%; height: 40px"
              ></input>
              <textarea
                form="addEventForm"
                name="description"
                placeholder="DESCRIPTION OF EVENTS"
                style="width: 90%; height: 70px"
              ></textarea>

              <div>
               
                <input type="file" name="coverPhoto" form = "addEventForm" id="img"  accept="image/*">
              </div>

              <div class="event-date mt-4 mb-4">
                <label>Event Date:</label>
                <input
                  type="date"
                  size="30"
                  name="startDate"
                  class="form-control"
                  id="datepicker"
                  style="width: 60%; float: right; margin-right: 15%"
                />
              </div>

              <label class="text-dark">Location:</label>
              <input
              type="text"
                form="addEventForm"
                placeholder="Location of Events"
                name = "location"
                style="
                  width: 60%;
                  float: right;
                  margin-right: 15%;
                  height: 40px;
                "
              ></input>
            </div> <div class="modal-footer justify-content-center">
          <button class="btn btn-success" >Add</button>
          <button
            class="btn btn-danger"
            data-dismiss="modal"
            
          >
            Cancel
          </button>
        </div>
          </form>
        </div>

       
      </div>
    </div>
  </div>
</div>
<section class="container text-left" style="padding:30px">

${eventCard ? eventCard.join(' ') : ''}

</section>
`;

  return eventTemplate;
}

export default eventTemplate;
