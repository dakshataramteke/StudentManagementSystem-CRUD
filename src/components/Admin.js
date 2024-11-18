import {React, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import './Admin.css';
import Swal from 'sweetalert2';


const Admin = () => {
    const [email, setEmail] = useState("");
    const [isPassword, setIsPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";
  const toggleInputType = () => {
    setIsPassword(!isPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 

    // Simple validation
    if (email === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    }

    // Check credentials
    if (email === adminEmail && password === adminPassword) {
      
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

  return (
    <>
      <div className="container loginPage"  >
        <div className="row d-flex justify-content-center align-items-center h-100">
        {error && <div className="text-danger">{error}</div>}
          <div className="col-4  p-4 loginForm">
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
  

  <div className="d-flex justify-content-center">
  <button type="submit" className="btn btn-success w-50" >Login</button>
  </div>

 
 

                </div>
              </form>
     
          </div>
          {/* <div className="BacktoHome">
  <Link to={'/'}>Back</Link>
  </div> */}
        </div>
     
      </div>

    
    </>
  );
};

export default Admin;
