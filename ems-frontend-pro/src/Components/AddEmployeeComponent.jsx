import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmailname] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  function handleFirstName(e) {
    setFirstname(e.target.value);
  }
  function handleEmail(e) {
    setEmailname(e.target.value);
  }
  function handleLasttName(e) {
    setLastname(e.target.value);
  }

  useEffect(() => {
    if (id) {
      getEmployee(id).then((response) => {
        console.log(id);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmailname(response.data.email);
      });
    }
  }, [id]);

  function submitEmployee(e) {
    e.preventDefault();

    const employee = { firstname, lastname, email };

    if (id) {
      updateEmployee(id, employee).then((response) => {
        console.log(response.data);
        navigate("/employees");
      });
    } else {
      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigate("/employees");
      });
    }
  }

  function pageTitle() {
    if (id) {
      return <h2>Update Employee</h2>;
    } else {
      return <h2>Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">{pageTitle()}</h2>

        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  className="form-control"
                  onChange={handleFirstName}
                  required
                ></input>
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  className="form-control"
                  onChange={handleLasttName}
                  required
                ></input>
                <label className="form-label">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={handleEmail}
                  required
                ></input>
              </div>
              <button
                className="btn btn-primary text-center"
                onClick={submitEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
