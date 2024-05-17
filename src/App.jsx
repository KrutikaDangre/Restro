import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './projectfile/navbar';
import Carousel from './projectfile/landingpg';
import Rooms from './projectfile/roompage';
import Slideshow from './projectfile/dining';
import GetInTouch from './projectfile/contact';
import Imgslide from './projectfile/booknow';
import Login from './projectfile/login';
import HotelBookingForm from './projectfile/bookingfrom';
import './App.css';
import HotelNavbar from './projectfile/navbar';

function App() {
  return (

    
    <Router>
     
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dining" element={<Slideshow />} />
          <Route path="/contact" element={< GetInTouch />} />
          <Route path="/booknow" element={< Imgslide />} />
          <Route path="/login" element={< Login />} />
          <Route path="/bookingfrom" element={< HotelBookingForm />} />

          

        {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


