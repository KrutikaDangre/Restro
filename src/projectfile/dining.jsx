import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function Slideshow() {
  return (
    <>
      <h1 className='text-center pt-20 pb-20 text-5xl border-ms-0 me-0'>DINING</h1>
      <div id="myCarousel" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/diningimg1.jpg" className="d-block w-100 img1" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/diningimg2.jpg" className="d-block w-100 img1" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/diningimg3.jpg" className="d-block w-100 img1" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      {/* Our Resturant */}


      <h1 className='text-center pt-20 pb-20 text-5xl border-ms-0 me-0'>Our Restaurants</h1>
      <div className="container information">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
    <Accordion.Header className='text-center text-red-500/100 font-bold pt-2'>Majestic Masala: Indian Cuisine</Accordion.Header>
    <Accordion.Body>
      <div className='flex'>
        <div className='w-1/2'>
          <img src="https://www.tulihotels.com/images/logo-majestic-masala.png" className='w-50' alt="" />
          <h3 className='p-1'>Telephone: 0712-6653666</h3>
          <h3 className='p-1'>Extension: 3702</h3>
          <h3 className='p-1'>Mail ID: majestic@tulihotels.com</h3>
        </div>
        <div className='w-1/2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header className='text-center text-red-500/100 font-bold pt-2'>Mint Leaf: Multi Cuisine</Accordion.Header>
    <Accordion.Body>
      <div className='flex'>
        <div className='w-1/2'>
          <img src="https://www.tulihotels.com/images/logo-mint-leaf.png" className='w-50' alt="" />
          <h3 className='p-1'>Telephone: 0712-6653666</h3>
          <h3 className='p-1'>Extension: 3702</h3>
          <h3 className='p-1'>Mail ID: majestic@tulihotels.com</h3>
        </div>
        <div className='w-1/2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header className='text-center text-red-500/100 font-bold pt-2'>Ruoofh 180: Oriental, mexican, Tandoor</Accordion.Header>
    <Accordion.Body>
      <div className='flex'>
        <div className='w-1/2'>
          <img src="https://www.tulihotels.com/images/logo-ruoofh.png" className='w-50' alt="" />
          <h3 className='p-1'>Telephone: 0712-6653666</h3>
          <h3 className='p-1'>Extension: 3702</h3>
          <h3 className='p-1'>Mail ID: majestic@tulihotels.com</h3>
        </div>
        <div className='w-1/2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>

      
      </div>
   


    </>
  );
}

export default Slideshow;