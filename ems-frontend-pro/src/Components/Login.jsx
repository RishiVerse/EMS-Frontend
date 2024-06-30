import React, { useState } from "react";
import {
  LoginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    if (usernameOrEmail === "" || password === "") {
      alert("please enter credentials");
    } else {
      LoginAPICall(usernameOrEmail, password)
        .then((response) => {
          console.log("Response data:", response);

          const token = "Bearer " + response.accessToken;
          console.log("Generated token:", token);
          storeToken(token);

          saveLoggedInUser(usernameOrEmail);
          console.log("User saved:", usernameOrEmail);
          navigate("/homepage");
        })
        .catch((error) => {
          console.error("Login error:", error);
        });
    }
  };

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 col-mt-4 border border-x-gray-950">
          <form>
            <div className=" mb-4 mt-8">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setUsernameOrEmail(e.target.data)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.data)}
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Check me out</label>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleLoginForm(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
