import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import Swal from "sweetalert2";

// import {Link} from 'react-router-dom';

const AddStudent = () => {
  const [students, setStudents] = useState({
    firstname: "",
    lastname: "",
    fatname: "",
    motname: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone_no: "",
    telephone: "",
    mobile: "",
    class: "",
    fees: "",
  });

  const [image, setImage] = useState({
    adharcard: null,
    photo: null,
    lasttc: null,
  });
  // For print the page
  const handlePrint = () => {
    window.print();
  };

  // Submit Button alert
  const SubmitAlert = () => {
    Swal.fire({
      title: "Successfully!",
      text: "Your Data is Saved!",
      icon: "success",
    });
  };
  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setStudents((prevState) => ({
      ...prevState,
      [name]: value, // Use computed property name to update the correct field
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;

    if (file) {
      setImage((prevImage) => ({
        ...prevImage,
        [name]: file, // Set the file based on the input name
      }));
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(students);
    console.log(image);

    const formData = new FormData();
    for (const key in image) {
      if (image[key]) {
        formData.append(key, image[key]);
      }
    }

    // Append student data to FormData
    for (const key in students) {
      formData.append(key, students[key]);
    }

    axios
      .post("http://localhost:8081/addstudent", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        // setStudents("")
      })
      .catch((error) => {
        console.log(error);
      })
  };
  return (
    <div>
      <div className=" container-fluid StudentForm px-4 mt-5">
        <div>
          <h2 className="text-center">ADD STUDENT</h2>
        </div>
        <form onSubmit={Submit}>
          <div className="row ">
            <div className="col-12 col-md-6">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                aria-describedby="FirstName"
                name="firstname" // Match this with the state property
                value={students.firstname} // Bind to state
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lname"
                name="lastname"
                value={students.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-12 col-md-6">
              <label htmlFor="fatname" className="form-label">
                Father Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fatname"
                aria-describedby="FirstName"
                name="fatname" // Match this with the state property
                value={students.fatname} // Bind to state
                onChange={handleChange} // Use the generic handler
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="motname" className="form-label">
                Mother Name
              </label>
              <input
                type="text"
                className="form-control"
                id="motname"
                name="motname" // Match this with the state property
                value={students.motname} // Bind to state
                onChange={handleChange} // Use the generic handler
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={students.dob}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-12 col-md-6 d-flex mt-5">
              <span>Gender : </span>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="Male"
                  value="Male"
                  checked={students.gender === "Male"} // Bind the checked state
                  onChange={handleChange} // Correct state update
                />
                <label className="form-check-label" htmlFor="Male">
                  Male
                </label>
              </div>

              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="Female"
                  value="Female"
                  checked={students.gender === "Female"} // Bind the checked state
                  onChange={handleChange} // Correct state update
                />
                <label className="form-check-label" htmlFor="Female">
                  Female
                </label>
              </div>

              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={students.gender === "other"} // Bind the checked state
                  onChange={handleChange} // Correct state update
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* Address  */}
          <div className="row">
            <div className="col-12 ">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={students.address}
                onChange={handleChange}
                aria-describedby="emailHelp"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-12 col-md-4">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={students.city}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={students.state}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="pincode" className="form-label">
                Pin Code
              </label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                name="pincode"
                value={students.pincode}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-12 col-md-4">
              <label htmlFor="mobileno" className="form-label">
                Mobile No
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobileno"
                name="mobile"
                value={students.mobile}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="phoneno" className="form-label">
                Phone No :
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneno"
                value={students.phone_no}
                onChange={handleChange}
                name="phone_no"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="telephone" className="form-label">
                Telephone No :
              </label>
              <input
                type="tel"
                className="form-control"
                id="telephone"
                name="telephone"
                value={students.telephone}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <hr />
          <h3>Admission Details</h3>
          <div className="row">
            <div className="col-12 col-md-4">
              <label htmlFor="classDetails" className="form-label">
                Class
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="classDetails"
                name="class"
                value={students.class} // Bind the value to the state
                onChange={handleChange} // Handle change here
              >
                <option>Admission Class</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="fatname" className="form-label">
                Fees
              </label>
              <input
                type="text"
                className="form-control"
                id="fees"
                aria-describedby="FirstName"
                name="fees" // Match this with the state property
                value={students.fees} // Bind to state
                onChange={handleChange} // Use the generic handler
              />
            </div>
          </div>
          <hr />
          <h3>Upload Documents</h3>
          <div className="row">
            <div className="col-12 col-md-4">
              <label htmlFor="Adharcard" className="form-label">
                Adhar Card
              </label>
              <input
                type="file"
                className="form-control"
                id="Adharcard"
                name="adharcard"
                onChange={handleFileChange}
              />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="photo" className="form-label">
                Photo
              </label>
              <input
                type="file"
                className="form-control"
                id="photo"
                name="photo"
                onChange={handleFileChange}
              />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="lastTc" className="form-label">
                Last Tc
              </label>
              <input
                type="file"
                className="form-control"
                id="lastTc"
                name="lasttc"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-5"></div>
            <div className="col-5">
              <button className="btn btn-success my-4" onClick={SubmitAlert}>
                Submit
              </button>
            </div>
            <div className="col-2">
              <button onClick={handlePrint} className="btn btn-primary my-4">
                Print
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
