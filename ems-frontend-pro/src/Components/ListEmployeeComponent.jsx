import React, { useEffect, useState } from "react";
import { listEmployee, removeEmployee } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEmp();
  }, []);

  const getEmp = async () => {
    try {
      const response = await listEmployee();
      const data = response.data; // Access the data property
      console.log("Fetched employees:", data); // Log the fetched data
      if (Array.isArray(data)) {
        setEmployees(data);
      } else {
        setEmployees([]);
      }
    } catch (error) {
      console.error("Error in getEmp function:", error);
      setEmployees([]);
    }
  };

  const addNewEmployee = () => {
    navigate("/add-employee");
  };

  const updateEmployee = (id) => {
    navigate(`/update-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    removeEmployee(id).then(() => {
      getEmp();
    });
  };

  return (
    <div className="container">
      <h2 className="text-center"> List of Employees </h2>
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
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
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
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
