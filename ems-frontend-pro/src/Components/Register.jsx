function Register() {
  return (
    <>
      <div
        className="container col-lg-6 ml-auto mr-auto"
        style={{ padding: "60px" }}
      >
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="form-label">Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
