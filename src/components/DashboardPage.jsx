import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Outlet} from 'react-router-dom';

const DashboardPage = () => {
const [StudentCount,setStudentCount] = useState();
const [FeesCount,setFeesCount] = useState(0);

    useEffect(()=>{
        StudentTotal();
        FeesTotal();
    },[])

    const StudentTotal = () => {
    axios.get('http://localhost:8081/student_count')
        .then(result => {
            console.log(result.data); // Log the entire response
           
            if (result.data.Status) {
                setStudentCount(result.data.count); // Access the count directly
            } else {
                console.error("Status is false or unexpected response structure:", result.data);
                setStudentCount(0); // Default value if structure is unexpected
            }
        })
        .catch(err => console.log(err));
}

const FeesTotal = () => {
    axios.get('http://localhost:8081/student_total')
        .then(result => {
            console.log(result.data); // Log the entire response
           
            if (result.data.Status) {
                if (result.data.result && result.data.result.length > 0) {
                    setFeesCount(result.data.result[0].feesStu); // Access the count directly
                } else {
                    console.error("Result is empty or not as expected:", result.data);
                    setFeesCount(0);
                }
            } else {
                console.error("Status is false or unexpected response structure:", result.data);
                setFeesCount(0);
            }
        })
        .catch(err => {
            console.error("Error fetching fees total:", err);
            setFeesCount(0); // Optionally set a default value on error
        });
}

  return (
    <>
    <div className='container'>
        <div className="row">
        <div className='col-md-3 shadow p-4 m-3'>
        <div className="text-center">
        <h4 className='text-center'>Total Students {
                StudentCount
            }</h4>
        </div>
      
         </div>

         <div className='col-md-3 shadow p-4 m-3'>
        <div className="text-center">
        <h4 className='text-center'>Total Balance {
            FeesCount
        }</h4>
        
        </div>
      
         </div>

         <div className='col-md-3 shadow p-4 m-3'>
        <div className="text-center">
        <h4 className='text-center'>Total Students</h4>
        </div>
      
         </div>
        </div>
    </div>
    {/* <Outlet /> */}
    </>
  )
}

export default DashboardPage
