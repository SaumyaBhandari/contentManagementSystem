function galleryTemplate() {
  let gallery = JSON.parse(
    document.getElementById('gallery').getAttribute('data-gallery')
  );

  console.log(gallery);
  let galleryCard;

  galleryCard = gallery[0].images.map((el, index) => {
    return `   <div class="col-lg-6 col-md-6 col-12">
    <div class="card m-2">
      <a href="images/img1.jpg" data-lightbox="images"
        ><img
          class="card-img-top"
          src="images/gallery/${el}"
          alt="image"
          style="height: 250px"
      /></a>
      <div class="card-body m-1">
        <lutton
         
          data-target="#mymodel1"
          data-toggle="modal"
          
        >
          
        </lutton>

        <div class="modal" id="mymodel1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="text-center id = "Edit Photos"></h3>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                >
                  &times;
                </button>
              </div>

            

              <div class="modal-footer justify-content-center">
                <button class="btn btn-success" >
                  Edit
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
          class="btn btn-danger text-white float-right mr-3"
          data-target="#mk${index}"
          data-toggle="modal"
          
        >
          Delete
        </button>
        <div class="modal" id="mk${index}">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="text-center">Delete Photo</h3>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                > 
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <h5>Are you sure you want to delete the Photo??</h5>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="submit" id="deleteImageBtn"  data-imageID="${el}" class="btn btn-success" >
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
      </div>
    </div>
  </div>  `;
  });

  const galleryTemplate = `

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
            <h3 class="text-center">Add Photos</h3>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div class="modal-body">
          <form  method='POST' enctype= "multipart/form-data" id = "updateGalleryForm" action='/api/v1/gallery'>
              <div class="form-group font-weight-bold">
                <div>
                  
                  <input type="file" required multiple name="images"  id="img"  accept="image/*">
                  
                </div>
              </div>

               <div class="modal-footer justify-content-center">
            <button class="btn btn-success" type="submit" >Add</button>
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


  <section class="container pb-5" style="width: 70%; float: right">
  <div class="row">
    <div class="card-group">
       
   ${galleryCard}
    </div>
  </div>
</section>
  
 
  `;

  return galleryTemplate;
}

export default galleryTemplate;
