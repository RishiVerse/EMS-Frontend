import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigation = useNavigate();

  
  const manageEmployee = () => {
    navigation("/employees");
  };

  return (
    <>
      <div className="container-fluid bg-grey">
        <div className="row flex-grow-1">
          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-10 px-4 bg-grey"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card card-with-padding">
                  <div className="card-body">
                    <h5 className="card-title">Number of Employee</h5>
                    <p className="card-text">one</p>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-with-padding">
                  <div className="card-body">
                    <h5 className="card-title">In Notice Period</h5>
                    <p className="card-text">Zero</p>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-with-padding">
                  <div className="card-body">
                    <h5 className="card-title">Salary</h5>
                    <p className="card-text">
                      Highest Salary : 23 Minimum Salary : 12 Average Salary :
                      15
                    </p>
                    <a href="#" className="btn btn-primary">
                      {" "}
                      Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-with-padding">
                  <div className="card-body">
                    <h5 className="card-title">Roles and Responsibility</h5>
                    <p className="card-text">Will come later</p>
                    <a href="#" className="btn btn-primary">
                      Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-with-padding">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-with-padding">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default Homepage;
