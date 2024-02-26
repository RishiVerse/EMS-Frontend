import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    // Handle the click event here
    console.log("Link clicked!");
    navigate("/employees");

    // You might want to navigate to the ListEmployeeComponent or perform some other action
  };
  return (
    <div>
      <header>
        <nav className="nav navbar navbar-dark bg-dark">
          <a className="navbar-brand" onClick={handleLinkClick}>
            Employee management System
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
