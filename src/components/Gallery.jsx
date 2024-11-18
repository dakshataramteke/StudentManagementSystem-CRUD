import React from 'react';
import './Gallery.css';
import {Link} from 'react-router-dom';

const Gallery = () => {
  return (
    <div className='container ' style={{marginTop:'5rem'}}>
    <h1>GALLERY OF COLLEGE </h1>
    <div className="row my-4"  >
        <div className="col-12 col-md-4 col-md-4" >
        <img src="/Images/gal1.jpg" alt="" className='Gallery_image' />
        </div>

        <div className="col-12 col-md-4 col-md-4">
        <img src="/Images/gal2.jpg" alt="" className='Gallery_image' />
        </div>

        <div className="col-12 col-md-4 col-md-4">
        <img src="/Images/gal3.jpg" alt=""  className='Gallery_image' />
        </div>
    </div>

    <div className="row mt-5" >
        <div className="col-12 col-md-4 col-md-4 " >
        <img src="/Images/gal4.jpg" alt="" className='Gallery_image' />
        </div>

        <div className="col-12 col-md-4 col-md-4">
        <img src="/Images/gal5.jpg" alt="" className='Gallery_image' />
        </div>

        <div className="col-12 col-md-4 col-md-4">
        <img src="/Images/gal6.jpg" alt=""  className='Gallery_image' />
        </div>
    </div>

    <div className='my-5'>
        <Link to={'/'}>Back to Home</Link>
    </div>
    </div>
  )
}

export default Gallery
