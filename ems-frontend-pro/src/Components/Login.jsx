import React, { useState } from "react";
import {
  LoginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "" || password === "") {
      alert("please enter credentials");
    } else {
      LoginAPICall(username, password)
        .then((response) => {
          console.log("Response data:", response);

          const token = "Bearer " + response.accessToken;
          console.log("Generated token:", token);
          storeToken(token);

          saveLoggedInUser(username);

          console.log("User saved:", username);

          console.log(username);
          navigate(`/home/${username}`);
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
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleLoginForm}
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
