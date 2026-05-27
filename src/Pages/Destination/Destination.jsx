import React, { useState } from "react";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import sectionbanner from "../../assets/section-banner.jpg"
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
import destinations from "../../Data/DestinationCtg.json"
import DestinationCtgCard from "../../Components/DestinationCtgCard/DestinationCtgCard.jsx";

export default function Destination() {


    return (
        <>
            <div className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative" style={{ backgroundImage: `url(${sectionbanner})` }}>
                <div className="section-content z-0 text-center">
                    <h4 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary'>Destination</h4>
                    <ul className='flex items-center flex-wrap justify-center gap-2'>
                        <li>
                            <Link to="/" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Home</Link>
                        </li>
                        <span className='text-secondary'>/</span>
                        <li>
                            <Link to="/destination" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Destination</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="destination px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 bg-[#E6F1F3]">
                {destinations.map((item) => (
                    <DestinationCtgCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
