function userTemplate(user) {
  const form = `<div class="profile-page" style="margin-bottom: 300px">
    <div class="page-header header-filter" data-parallax="true"></div>
    <div class="main main-raised">
      <div class="profile-content">
        <div class="container">
          <h3 class="display-5 text-muted text-center">Add Admin</h3>
          <form action="/api/v1/users/addAdmin" method="POST">
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
  
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                required
                name="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                required
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                class="form-control"
                required
                name="confirmPassword"
                placeholder="Password"
              />
            </div>
  
            <button type="submit" class="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>`;

  const userTemplate = `
  <div class="profile-page">
  <div class="page-header header-filter" data-parallax="true"></div>
  <div class="main main-raised">
    <div class="profile-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="profile">
              <div class="avatar">
                <img
                  src="/images/users/${user.picture}"
                  alt="Circle Image"
                  class="img-raised rounded-circle img-fluid"
                />
              </div>
              <div class="name">
                <h3 class="title">${user.name.toUpperCase()}</h3>
                <h6>${user.role}</h6>
              </div>
            </div>
          </div>
        </div>
        <h5 style="padding: 20px" class="display-5 float:left">
          Email : <span class="text-muted">${user.email}</span>
        </h5>
      </div>
    </div>
  </div>
</div>
<br />
${user.role == 'admin' ? form : ''}
`;

  return userTemplate;
}

export default userTemplate;
