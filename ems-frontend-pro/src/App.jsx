import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployeeComponent from "./Components/AddEmployeeComponent";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";
import SideBar from "./Components/SideBar";
import EmployeeSearch from "./Components/EmployeeSearch";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          {/* http://localhost:8080 */}
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/employeesearch" element={<EmployeeSearch />} />
          <Route
            path="/update-employee/:id"
            element={<AddEmployeeComponent />}
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
