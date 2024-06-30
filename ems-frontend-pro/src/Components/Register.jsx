import { useState } from "react";
import { registerAPICall } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const register = { name, username, email, password };
    console.log(register);
    registerAPICall(register)
      .then((response) => {
        console.log(response);
        alert("register successful");
        navigate("/homepage");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div
        className="container col-lg-6 ml-auto mr-auto"
        style={{ padding: "60px" }}
      >
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary text-center"
                onClick={(e) => handleRegister(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
