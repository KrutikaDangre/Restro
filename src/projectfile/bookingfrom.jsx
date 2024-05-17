
import React from "react";

function HotelBookingForm () {
  

  return (
    <>
    <div className="fluid container regifrom">
     <div className="max-w-lg  mx-auto  p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl text-green-500 font-semibold mb-4">Hotel Booking</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
          <input type="text" id="fullName" name="fullName"  className="border border-gray-400 px-4 py-2 rounded-lg w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <input type="text" id="address" name="address"  className="border border-gray-400 px-4 py-2 rounded-lg w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
          <input type="text" id="mobileNumber" name="mobileNumber"  className="border border-gray-400 px-4 py-2 rounded-lg w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="checkInDate" className="block text-gray-700 font-bold mb-2">Check-in Date</label>
          <input type="date" id="checkInDate" name="checkInDate"  className="border border-gray-400 px-4 py-2 rounded-lg w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block text-gray-700 font-bold mb-2">Check-out Date</label>
          <input type="date" id="checkOutDate" name="checkOutDate"  className="border border-gray-400 px-4 py-2 rounded-lg w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfGuests" className="block text-gray-700 font-bold mb-2">Number of Guests</label>
          <input type="number" id="numberOfGuests" name="numberOfGuests"  className="border border-gray-400 px-4 py-2 rounded-lg w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="specialRequests" className="block text-gray-700 font-bold mb-2">Special Requests</label>
          <textarea id="specialRequests" name="specialRequests"  rows="4" className="border border-gray-400 px-4 py-2 rounded-lg w-full"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
      </form>
    </div>
    </div>
    </>
   
    
  );
};

export default HotelBookingForm;
