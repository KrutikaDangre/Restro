import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Imgslide() {

  const [isVisible, setIsVisible] = useState(false);

  
  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
  <>
  <div className="container-fluid p-2 mr-5 h-11 bg-dark flex justify-end">
<Link to="/login">  <button  data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-orange-300 hover:text-red-500 focus:ring-4 focus:outline-none font-medium rounded-lg   text-base " >Login</button></Link>  
  </div>
     <div id="customCarousel" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="images/banar4.jpg" class="d-block w-100 img1" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="images/banar5.jpg" class="d-block w-100 img1" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="images/banar6.jpg" class="d-block w-100 img1" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div className="container bg-gray-300">
  <div class=" w-1200px grid lg:grid-cols-4 grid md:grid-cols-3 gap-3 gap-x-3 p-4 ">
   <div className="col1">
   <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
   </div>

<div className="col2">
<form class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
  
  <input className='block w-full rounded-md py-1' type="date" id="birthday" name="birthday"/>
  
</form>
</div>
   <div className="col3">
    <select name="INR" id="INR" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
      <option >INR</option>
    </select>
   </div>
   <div className="col4">
    <select name="INR" id="INR" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
      <option >Select Code</option>
    </select>
   </div>
  </div>
  </div>
  <div className="container p-3">
    <p><b>Tuli Imperial The Boutique Hotel</b>: 37, Farm Land, Central Bazar Road, Ramdaspeth, NAGPUR, Maharashtra, India 440010 |<b> Check-In Time</b> - 2:00 PM    <b>Check-Out Time</b> - 12:00 PM</p>
  </div>
  </>
 
  );
}

export default Imgslide;