import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  const handleEmployeeSearch = () => {
    navigate("/employeesearch");
  };

  const handleLinkClick = () => {
    // Handle the click event here
    console.log("Link clicked!");
    navigate("/employees");

    // You might want to navigate to the ListEmployeeComponent or perform some other action
  };

  const handleSearch = (event) => {
    searchData(event.target.value);
    
    setSearchFlag(true);


  };

  return (
    <nav className="navbar  bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand " onClick={handleLinkClick}>
          Employee@Care
        </a>
        <form className="d-flex " role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearch}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleEmployeeSearch}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default HeaderComponent;
