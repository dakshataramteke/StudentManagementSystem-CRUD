import React from 'react';
import './Home.css';

const HomeBanner = () => {
  return (
    <div>
        <section>
      <div className='container-fluid px-0 position-relative'>
      <img src="/Images/banner.jpg" alt="College Data"  style={{width:'100%', height:'100vh'}}/>
      <h1 className='text-center imgBanner'>Welcome to Our College</h1>
      </div>
    </section>
    </div>
  )
}

export default HomeBanner
