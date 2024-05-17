import React from 'react'
import { Link } from 'react-router-dom';

function Rooms() {
    return (

        <>
            <div className="container main">
                <h1 className='text-center pt-20 text-5xl border-ms-0 me-0'>Rooms&Suits</h1>
                <div className="container para p-6 text-center">
                    <p className=" text-justify">Beautifully furnished and very elegantly equipped, the rooms and suites are the ultimate in fine living. You could enjoy majestic royalty, lavishness and enchanting interiors. The rooms and suites are featured with remote control TV with multi channels, video and satellite transmission, ISD and STD direct dialing facilities, refrigerator, climate control and digital personal safes. The suites are equipped with mini bars. The cozy feel of the place gives you a home away from home.</p>
                </div>
                {/* Rooms cards */}

                <div class=" grid lg:grid-cols-3 grid md:grid-cols-2 gap-3 gap-x-3 p-4 ">
                    <div className='card  shadow-lg transform transition duration-500  
        hover:scale-105 hover:shadow-2xl border-0 '>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="https://www.tulihotels.com/images/deluxe-twin-room.jpg" alt="Room1_img"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">DELUXE TWIN</div>
                                    <p class="text-gray-700 text-base">
                                    Outfitted with comfy twin beds and modern amenities, you will certainly feel at home in our Double Deluxe Rooms..
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 ">
                             <Link to="/bookingfrom"> <button className='bg-dark text-white p-2 rounded-1 '>Book Now</button></Link>
                                </div>
                        </div>
                    </div>

                    <div className='card border-0  shadow-lg transform transition duration-500  
        hover:scale-105 hover:shadow-2xl'>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="https://www.tulihotels.com/images/deluxe-king-room.jpg" alt="Room2_img"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">DELUXE KING</div>
                                    <p class="text-gray-700 text-base">
                                    Outfitted with comfy twin beds and modern amenities, you will certainly feel at home in our Double Deluxe Rooms..
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 ">
                              <button className='bg-dark text-white p-2 rounded-1'>Book Now</button>
                                </div>
                        </div>
                    </div>
                    <div className='card border-0  shadow-lg transform transition duration-500  
        hover:scale-105 hover:shadow-2xl'>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="https://www.tulihotels.com/images/club-twin-room.jpg" alt="Room3_img"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">CLUB TWIN</div>
                                    <p class="text-gray-700 text-base">
                                    Outfitted with comfy twin beds and modern amenities, you will certainly feel at home in our Double Deluxe Rooms..
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 ">
                                <button className='bg-dark text-white p-2 rounded-1'>Book Now</button>
                                </div>
                        </div>
                    </div>
                    <div className='card border-0  shadow-lg transform transition duration-500  
        hover:scale-105 hover:shadow-2xl'>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="https://www.tulihotels.com/images/club-king-room.jpg" alt="Room4_img"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">CLUB KING</div>
                                    <p class="text-gray-700 text-base">
                                    Outfitted with comfy twin beds and modern amenities, you will certainly feel at home in our Double Deluxe Rooms..
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 ">
                                <button className='bg-dark text-white p-2 rounded-1'>Book Now</button>
                                </div>
                        </div>
                    </div>
                    <div className='card border-0  shadow-lg transform transition duration-500  
        hover:scale-105 hover:shadow-2xl'>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="https://www.tulihotels.com/images/club-suite-room.jpg" alt="Room5_img"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">CLUB SUITE</div>
                                    <p class="text-gray-700 text-base">
                                    Outfitted with comfy twin beds and modern amenities, you will certainly feel at home in our Double Deluxe Rooms..
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 ">
                                <button className='bg-dark text-white p-2 rounded-1'>Book Now</button>
                                </div>
                        </div>
                    </div>
                    <div className='card border-0  shadow-lg transform transition duration-500  
        hover:scale-105 hover:shadow-2xl'>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="https://www.tulihotels.com/images/imperial-suite.jpg" alt="Room6_img"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">IMPERIAL SUITE</div>
                                    <p class="text-gray-700 text-base">
                                    Outfitted with comfy twin beds and modern amenities, you will certainly feel at home in our Double Deluxe Rooms..
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 ">
                                <button className='bg-dark text-white p-2 rounded-1'>Book Now</button>
                                </div>
                        </div>
                    </div>
                   
                </div>

            </div>

            <div className="container footer text-center p-3 bg-blue-100 w-70">
                <h1 className='font-bold'>Telephone No.: 0712-6653666 Toll | Free No: 18002099050 | Mail ID : sales.imperial@tulihotels.com</h1>

            </div>


        </>
    );
};

export default Rooms

