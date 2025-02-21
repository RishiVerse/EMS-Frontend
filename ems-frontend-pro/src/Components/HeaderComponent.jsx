import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployee } from "../Services/EmployeeService";

const HeaderComponent = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [filterValue, setFilterValue] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const typeData = username;
    navigate(`/searchEmployee/${typeData}`);
  };

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const registerEmployee = () => {
    navigate("/register");
  };

  const loginEmployee = () => {
    navigate("/login");
  };

  const handleClick = () => {
    navigate("/homepage");
  };
  const handleEmployee = () => {
    navigate("/add-employee");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#" onClick={handleClick}>
          Employee@Care
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleEmployee}
                  >
                    Add Employee
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex col-md-7">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                style={{ width: "500px" }}
                className="form-control me-6"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <button
            type="button"
            className="btn btn-link text-white"
            onClick={registerEmployee}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-link text-white"
            onClick={loginEmployee}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
