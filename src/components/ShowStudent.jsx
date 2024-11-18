// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ShowStudent = () => {
//   const [category, setCategory] = useState([]);
//   const [FeesCount, setFeesCount] = useState(0);
//   const [classCounts, setClassCounts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8081/show_Student")
//       .then((result) => {
//         if (result.data.Status) {
//           setCategory(result.data.result);
//         }
//       })
//       .catch((err) => console.log(err));
//     FeesTotal();
//   }, []);

//   useEffect(() => {
//     const fetchClassCounts = async () => {
//       try {
//         const result = await axios.get('http://localhost:8081/showClass');
//         if (result.data.Status) {
//           setClassCounts(result.data.result);
//         }
//       } catch (err) {
//         console.error("Error fetching class counts:", err);
//       }
//     };

//     fetchClassCounts();
//   }, []);

//   // Total Calculations
//   const FeesTotal = () => {
//     axios
//       .get("http://localhost:8081/student_total")
//       .then((result) => {
//         console.log(result.data); // Log the entire response

//         if (result.data.Status) {
//           if (result.data.result && result.data.result.length > 0) {
//             setFeesCount(result.data.result[0].feesStu); // Access the count directly
//           } else {
//             console.error("Result is empty or not as expected:", result.data);
//             setFeesCount(0);
//           }
//         } else {
//           console.error(
//             "Status is false or unexpected response structure:",
//             result.data
//           );
//           setFeesCount(0);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching fees total:", err);
//         setFeesCount(0); // Optionally set a default value on error
//       });
//   };
//   // show_Student

//   const classNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

//   return (
//     <div className="container">
//       <div className="row offset-1">
//         {classNumbers.map((classNumber) => {
//           const classCount = classCounts.find(cc => cc.className === classNumber.toString());
//           return (
//             <div className="col-md-1" key={classNumber}>
//               <div>Class {classNumber}</div>
//               <p>{classCount ? classCount.count : 0}</p>
//             </div>
//           );
//         })}
//       </div>

//       <div>
//         <h2 className="text-center text-uppercase mt-5">Student LIst</h2>
//       </div>
//       <div className="row mt-3">
//         <table className="table ">
//           <thead>
//             <tr>
//               <th scope="col">First</th>
//               <th scope="col">Last</th>
//               <th scope="col">Mobile No</th>
//               <th scope="col">Class</th>
//               <th scope="col">Fees</th>
//             </tr>
//           </thead>
//           <tbody>
//             {category.map((c) => (
//               <tr key={c.id}>
//                 <td>{c.fname}</td>
//                 <td>{c.lname}</td>
//                 {/*    {Database ME jis Name Se store hoga } */}
//                 <td>{c.mobile_no}</td>
//                 <td>{c.class}</td>
//                 <td>{c.fees}</td>
//               </tr>
//             ))}
//           </tbody>

//           <tbody>
//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td>Total Fees :</td>
//               <td>{FeesCount}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ShowStudent;


import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowStudent = () => {
  const [category, setCategory] = useState([]);
  const [totalFees, setTotalFees] = useState(0);
  const [classCounts, setClassCounts] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchClassCounts();
    fetchFeesTotal();
  }, []);

  // Fetch student data
  const fetchStudents = async () => {
    try {
      const result = await axios.get("http://localhost:8081/show_Student");
      if (result.data.Status) {
        setCategory(result.data.result);
      }
    } catch (err) {
      console.error("Error fetching student data:", err);
    }
  };

  // Fetch class counts
  const fetchClassCounts = async () => {
    try {
      const result = await axios.get('http://localhost:8081/showClass');
      if (result.data.Status) {
        setClassCounts(result.data.result);
      }
    } catch (err) {
      console.error("Error fetching class counts:", err);
    }
  };

  // Fetch total fees
  const fetchFeesTotal = async () => {
    try {
      const result = await axios.get("http://localhost:8081/student_total");
      if (result.data.Status) {
        if (result.data.result && result.data.result.length > 0) {
          setTotalFees(result.data.result[0].feesStu);
        } else {
          setTotalFees(0);
        }
      } else {
        setTotalFees(0);
      }
    } catch (err) {
      console.error("Error fetching fees total:", err);
      setTotalFees(0);
    }
  };

  // Calculate fees for each class
  const calculateClassCounts = () => {
  const countsByClass = Array(10).fill(0); // Initialize an array for classes 1-10

  category.forEach(student => {
    const classIndex = parseInt(student.class) - 1; // Get the index for the class
    if (classIndex >= 0 && classIndex < countsByClass.length) {
      countsByClass[classIndex] += 1; // Increment the count for the class
    }
  });

  return countsByClass;
};
  const classFees = calculateClassCounts ();

  // Delete Data 
  const deleteData = async (id) => {
  console.log("delete successfully " + id);
  try {
    const res = await axios.delete(`http://localhost:8081/formDelete/${id}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="container" >
      <div className="row text-center mt-3" >
        {classFees.map((fee, index) => (
          <div className="col-md-1" key={index + 1} style={{border:'2px solid black'}}>
            <div>Class {index + 1}</div>
            <p className="mt-1"><b>{fee}</b></p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-center text-uppercase mt-5">Student List</h2>
      </div>
      <div className="row mt-3">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Class</th>
              <th scope="col">Fees</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {category.map((c) => (
              <tr key={c.id}>
                <td>{c.fname}</td>
                <td>{c.lname}</td>
                <td>{c.mobile_no}</td>
                <td>{c.class}</td>
                <td>{c.fees}</td>
                <td><button className="btn btn-sm btn-danger" onClick={()=>deleteData(c.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total Fees :</td>
              <td>{totalFees}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowStudent;