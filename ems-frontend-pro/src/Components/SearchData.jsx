import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { listEmployee } from "../Services/EmployeeService";
function SearchData() {
  const { typeData } = useParams();
  const [username, setUsername] = useState("");
  const [filterValue, setFilterValue] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);

  useEffect(() => {
    //console.log(username);

    listEmployee().then((response) => {
      const filterData = response.data.filter((emp) =>
        emp.firstname.toLowerCase().includes(typeData.toLowerCase())
      );
      setFilterValue(filterData);
      console.log(filterValue);
      setSearchFlag(true);
    });
  }, [typeData]);

  return (
    <>
      <h1> Employees</h1>
      {searchFlag && (
        <div>
          {filterValue.length > 0 ? (
            <ul>
              {filterValue.map((employee, index) => (
                <li key={index}>
                  {employee.firstname} {employee.lastname} - {employee.email}
                </li>
              ))}
            </ul>
          ) : (
            <span>No Employee found</span>
          )}
        </div>
      )}
    </>
  );
}

export default SearchData;
