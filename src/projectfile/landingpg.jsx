import React from 'react';
import Rooms from './roompage';
import Slideshow from './dining';
import GetInTouch from './contact';

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/banar1.jpg" className="d-block w-100 img1" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/banar2.jpg" className="d-block w-100 img1" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/banar3.jpg" className="d-block w-100 img1" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
      {/* <h1 className='heading flext top-0 justify-center'>Welcome </h1> */}
      <Rooms/>
      <Slideshow/>
      <GetInTouch/>
    </div>

       


  );
}

export default Carousel;