import React from 'react'
import { Link, Outlet , useLocation} from 'react-router-dom';
import './Home.css';
import HomeBanner from './HomeBanner';

const Home = () => {
  const location = useLocation(); // Get the current location

  return (
   <>
    <header className='homPage'>
    <nav className="navbar navbar-expand-lg p-0 fixed-top " style={{backgroundColor:'lightblue'}}>
   <div className="container">
   <Link to={'/'} className="nav-link active" aria-current="page" ></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className={`nav-link ${location.pathname==="/" ? 'active': ""}`} aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/gallery'} className={`nav-link ${location.pathname==='/gallery'?'active' :''}`}>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to={'/admin'} className={`nav-link ${location.pathname==='/admin' ? 'active' : ''}`}>Login Page</Link>
        </li>
      </ul>
     
    </div>
   
  </div>
</nav>
 {location.pathname === '/' && <HomeBanner />}
 <Outlet/>
    </header>

   </>
  )
}

export default Home
