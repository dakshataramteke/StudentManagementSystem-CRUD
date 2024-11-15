import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import './Admin.css';
import Swal from 'sweetalert2';


const Admin = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Simple validation
    if (email === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    }

    // Check credentials
    if (email === adminEmail && password === adminPassword) {
      // alert("Login successful!");
      Swal.fire({
        title: "Admin Login",
        text: "SuccessFully Login",
        icon: "success"
      });
      navigate("/admin/dashboard");

      // Redirect to admin dashboard or perform any other action
    } else {
      setError("Invalid email or password.");
    }
  };

  // const ConfirmForm = ()=>{
  
  // }
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center loginPage">
        {error && <div className="text-danger">{error}</div>}
          <div className="col-4 border p-4 loginForm">
          <h2 className="mb-4 text-center">Login Page</h2>
              <form action="" onSubmit={handleLogin}>
              <div className="box  ">
              <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email: </label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="staticEmail"   value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password: </label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" value={password}
                      onChange={(e) => setPassword(e.target.value)}/>
    </div>
  </div>
  

  <div className="mx-auto ">
  <button type="submit" className="btn btn-success w-100" >Login</button>
  </div>
 

                </div>
              </form>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
