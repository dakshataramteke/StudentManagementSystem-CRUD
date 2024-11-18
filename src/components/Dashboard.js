// src/components/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import {Link , Outlet, useLocation} from 'react-router-dom';
import DashboardPage from './DashboardPage';


const Dashboard = () => {
  const location = useLocation(); 
  console.log(location);// Get the current location
  return (
   
    <div className="container-fluid" id='Dashboard'>
    <div className="row">
      {/* Sidebar */}
      <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar p-0 ">
        <div className="position-fixed ms-3" >
        <ul className='nav-list'>
        <li>
            <h3>Dashboard</h3>
           </li>
           <li className='nav-item'>
            <i className='bi bi-house'></i>
             <Link className={`nav-link ${location.pathname==='/admin/dashboard'? 'active' :''}`} to={'/admin/dashboard'}>Home</Link>
           </li>
           <li className='nav-item'>
             <i className='bi bi-people-fill'></i>
            <Link className={`nav-link ${location.pathname==='/admin/dashboard/show_Student'? 'active':''}`} to={'/admin/dashboard/show_Student'}>Student List</Link>
          </li>
         <li className='nav-item'>
           <i className='bi bi-person'></i>
             <Link className={`nav-link ${location.pathname ==='/admin/dashboard/addStudent'?'active':''}`} to={'/admin/dashboard/addStudent'}>Add Student</Link>
           </li>
           <li className='nav-item' style={{marginTop:'23rem'}}>
             <Link className='nav-link fs-6'  to={'/'} style={{textDecoration:'underline', color:'blue' }}>Back to Home Page</Link>
           </li>
         </ul>
        </div>
     
      </nav>
      <main className="col-md-9 ms-sm-auto col-lg-10 p-0 ">
      {location.pathname === '/admin/dashboard' && <DashboardPage />}
        <Outlet />
       
      </main>
   
    </div>
  
  </div>
  );
}

export default Dashboard;