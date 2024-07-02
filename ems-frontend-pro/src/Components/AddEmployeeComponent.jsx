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
  const [employeeId, setEmployeeId] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

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
  function handleMobileNumber(e) {
    setMobileNumber(e.target.value);
  }
  function handleId(e) {
    setEmployeeId(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }

  useEffect(() => {
    if (id) {
      getEmployee(id).then((response) => {
        console.log(id);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmailname(response.data.email);
        setAddress(response.data.firstname);
        setMobileNumber(response.data.lastname);
        setEmployeeId(response.data.email);
      });
    }
  }, [id]);

  function submitEmployee(e) {
    e.preventDefault();

    const employee = {
      employeeId,
      email,
      firstname,
      lastname,
      address,
      mobileNumber,
    };

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
                <label className="form-label">Employee Id</label>
                <input
                  type="text"
                  name="employeeId"
                  value={employeeId}
                  className="form-control"
                  onChange={handleId}
                  required
                ></input>
                <label className="form-label">Mobile Number</label>
                <input
                  type="text"
                  name="Mobile Number"
                  value={mobileNumber}
                  className="form-control"
                  onChange={handleMobileNumber}
                  required
                ></input>
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="Address"
                  value={address}
                  className="form-control"
                  onChange={handleAddress}
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
