// src/components/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import {Link , Outlet} from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard container'>
      <div className='sidebar vh-100 '>
        <h2>Dashboard</h2>
        <ul className='nav-list'>
          <li className='nav-item'>
            <i className='bi bi-house'></i>
            <Link className='nav-link' to={''}>Home</Link>
          </li>
          <li className='nav-item'>
            <i className='bi bi-people-fill'></i>
            <Link className='nav-link' to={''}>Student List</Link>
          </li>
          <li className='nav-item'>
            <i className='bi bi-person'></i>
            <Link className='nav-link' to={'/admin/dashboard/addStudent'}>Add Student</Link>
          </li>
        </ul>
      </div>
      <div className='main-content '>
      <div className='shadow p-2 d-flex justify-content-center  HorizontalNav' style={{backgroundColor:'#6e9bdb'}}>
      <h1 className='text-center my-2' >Welcome to the Student Dashboard</h1>
      </div>
  
      <Outlet />
      </div>
    </div>
   
  );
}

export default Dashboard;