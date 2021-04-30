function eventTemplate() {
  //   let events = document.getElementById('event').getAttribute('data-events');
  let events = [1, 2, 3, 4];
  console.log(events);

  const eventCard = events.map((el) => {
    return `   <section class="container text-left">
    <div
      class="card text-dark mb-3 font-weight-bold mt-2"
      style="max-width: 75%; float: right"
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
        <i class="fa fa-fw fa-bell" color="white"></i> Important Notice

        <button
          class="btn btn-danger text-white btn-sm"
          data-target="#mymodel2"
          data-toggle="modal"
          style="float: right; margin: 3px; width: 8%"
        >
          <i class="fa fa-fw fa-times font-weight-bold" color="white"></i>
        </button>
        <div class="modal" id="mymodel2">
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
                <button class="btn btn-success" style="width: 70px">
                  OK
                </button>
                <button
                  class="btn btn-danger"
                  data-dismiss="modal"
                  style="width: 70px"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          class="btn btn-success text-white btn-sm"
          data-target="#mymodel3"
          data-toggle="modal"
          style="float: right; margin: 3px; width: 8%"
        >
          <i class="fa fa-fw fa-pencil font-weight-bold" color="white"></i>
        </button>

        <div class="modal" id="mymodel3">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="text-center text-dark">Edit Events</h3>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <form>
                  <div class="form-group font-weight-bold">
                    <div class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style="color: #48b13e"
                      >
                        <i class="fa fa-fw fa-bell"></i> Important Notice
                      </a>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a class="dropdown-item" href="#">Academic</a>
                        <a class="dropdown-item" href="#">Non Academic</a>
                      </div>
                    </div>

                    <textarea form="form" style="width: 50%; height: 40px">
Scholarship Opportunities </textarea
                    >
                    <textarea form="form" style="width: 90%; height: 90px">
Students can check whether they have got/reimbursed the money or not from the official website of UP Scholarship. Students can check whether they have got/reimbursed the money or not from the official website of UP Scholarship. </textarea
                    >

                    <div>
                      <img src="images/image.png" alt="Image" /><br />
                      <button type="button" class="add-image">
                        Edit image
                      </button>
                    </div>

                    <div class="event-date mt-4 mb-4">
                      <label class="text-dark">Event Date:</label>
                      <input
                        type="text"
                        size="30"
                        class="form-control"
                        id="datepickers"
                        style="width: 60%; float: right; margin-right: 15%"
                      />
                    </div>

                    <label class="text-dark">Location:</label>
                    <textarea
                      form="form"
                      style="
                        width: 60%;
                        float: right;
                        margin-right: 15%;
                        height: 40px;
                      "
                    >
Chabhil, Kathmandu </textarea
                    >
                  </div>
                </form>
              </div>

              <div class="modal-footer justify-content-center">
                <button class="btn btn-success" style="width: 70px">
                  Edit
                </button>
                <button
                  class="btn btn-danger"
                  data-dismiss="modal"
                  style="width: 70px"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body bg-light">
        <h5 class="card-title">Scholarship opportunities</h5>
        <p class="card-text">
          Students can check whether they have got/reimbursed the money or not
          from the official website of UP Scholarship. Students can check
          whether they have got/reimbursed the money or not from the official
          website of UP Scholarship.
        </p>
      </div>
    </div>
  </section>`;
  });

  const eventTemplate = `
<div class="add-icon">
  <button
    class="btn btn-secondary text-white btn-sm"
    data-target="#mymodel"
    data-toggle="modal"
    style="margin-left: 85%; width: 50px"
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
          <form>
            <div class="form-group font-weight-bold">
              <div class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style="color: #48b13e"
                >
                  <i class="fa fa-fw fa-bell"></i> Important Notice
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Academic</a>
                  <a class="dropdown-item" href="#">Non Academic</a>
                </div>
              </div>

              <textarea
                form="form"
                placeholder="TITLE OF EVENTS"
                style="width: 50%; height: 40px"
              ></textarea>
              <textarea
                form="form"
                placeholder="DESCRIPTION OF EVENTS"
                style="width: 90%; height: 70px"
              ></textarea>

              <div>
                <img src="images/image.png" alt="Image" /><br />
                <button type="button" class="add-image">Add image</button>
              </div>

              <div class="event-date mt-4 mb-4">
                <label>Event Date:</label>
                <input
                  type="text"
                  size="30"
                  class="form-control"
                  id="datepicker"
                  style="width: 60%; float: right; margin-right: 15%"
                />
              </div>

              <label class="text-dark">Location:</label>
              <textarea
                form="form"
                placeholder="Location of Events"
                style="
                  width: 60%;
                  float: right;
                  margin-right: 15%;
                  height: 40px;
                "
              ></textarea>
            </div>
          </form>
        </div>

        <div class="modal-footer justify-content-center">
          <button class="btn btn-success" style="width: 70px">Add</button>
          <button
            class="btn btn-danger"
            data-dismiss="modal"
            style="width: 70px"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
${eventCard}
`;

  return eventTemplate;
}

export default eventTemplate;
