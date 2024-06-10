import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./HeaderComponent.css"; // Import your CSS file

const HeaderComponent = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const navigate = useNavigate();

  const handleEmployeeSearch = () => {
    navigate("/employeesearch");
  };

  const handleLinkClick = (path) => {
    navigate(path); // More dynamic link handling
  };

  const handleSearch = (event) => {
    setSearchData(event.target.value);
    setSearchFlag(true);
  };

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Employee@Care
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={toggleOffcanvas}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end ${isOffcanvasOpen ? "show" : ""}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Services
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={toggleOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="offcanvas-nav list-group">
              <li
                className="list-group-item"
                onClick={() => handleLinkClick("/createteam")}
              >
                Create Team
              </li>
              <li
                className="list-group-item"
                onClick={() => handleLinkClick("/manageteams")}
              >
                Manage Teams
              </li>
              <li
                className="list-group-item"
                onClick={() => handleLinkClick("/viewtasks")}
              >
                View Tasks
              </li>
              <li
                className="list-group-item"
                onClick={() => handleLinkClick("/createtasks")}
              >
                Create Tasks
              </li>
              <li
                className="list-group-item"
                onClick={() => handleLinkClick("/reports")}
              >
                Reports
              </li>
              {/* Add more options as needed */}
              <li
                className="list-group-item"
                onClick={() => handleLinkClick("/settings")}
              >
                Settings
              </li>
              <li
                className="list-group-item"
                onClick={() => handleLinkClick("/help")}
              >
                Help
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
