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

    LoginAPICall(usernameOrEmail, password)
      .then((response) => {
        console.log("Response data:", response);

        // Assuming the response has the token as 'accessToken'
        const token = "Bearer " + response.accessToken;
        console.log("Generated token:", token);
        storeToken(token);

        saveLoggedInUser(usernameOrEmail);
        console.log("User saved:", usernameOrEmail);
        navigate("/homepage");

        // Only reload if necessary, typically avoid forcing reloads in React
        // window.location.reload(false);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center"> Login Form </h2>
            </div>

            <div className="card-body">
              <form onSubmit={handleLoginForm}>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">
                    Username or Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="usernameOrEmail"
                      className="form-control"
                      placeholder="Enter username or email"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Password </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
