import React, { useEffect, useState } from "react";
import { listEmployee, removeEmployee } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    getemp();
  }, []);

  function getemp() {
    listEmployee().then((response) => setEmployees(response.data));
  }

  function addNewEmployee() {
    navigation("/add-employee");
  }

  function updateEmployee(id) {
    navigation(`/update-employee/${id}`);
  }

  function deleteEmployee(id) {
    removeEmployee(id).then((response) => {
      getemp();
    });
  }

  return (
    <div className="container">
      <h2 className="text-center"> List of Employee </h2>
      <button
        type="button"
        className="btn btn-primary text-center"
        onClick={addNewEmployee}
      >
        Add Employee
      </button>

      <table className="table table-bordered table-striped table-rounded">
        <thead>
          <tr>
            <th>id</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstname}</td>
              <td>{emp.lastname}</td>
              <td>{emp.email}</td>
              <td>
                <button
                  className="btn btn-primary text-center"
                  onClick={() => updateEmployee(emp.id)}
                >
                  Update
                </button>

                <span style={{ margin: "0 5px" }}></span>

                <button
                  className="btn btn-danger text-center"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
