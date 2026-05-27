import React from "react";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import sectionbanner from "../../assets/section-banner.jpg"
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";

import ToursData from "../../Data/PopularTour.json"
import Mainbtn from "../../Components/Buttons/Mainbtn";
import PopularTourCard from "../../Components/PopularTourCard/PopularTourCard";

export default function Tours() {
    return (
        <>
            <div className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative" style={{ backgroundImage: `url(${sectionbanner})` }}>
                <div className="section-content z-0 text-center">
                    <h4 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary'>Tours</h4>
                    <ul className='flex items-center flex-wrap justify-center gap-2'>
                        <li>
                            <Link to="/" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Home</Link>
                        </li>
                        <span className='text-secondary'>/</span>
                        <li>
                            <Link to="/tours" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Tours</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#EFFFFF]">
                <div className="title flex flex-col justify-center items-center text-center relative mb-10">
                    <h1 className="text-secondary text-4xl md:text-6xl font-bold">
                        Explore Popular
                        <span className="text-yellow"> Tours! </span>
                    </h1>
                    <p className="text-secondary my-2 text-lg">
                        Destinations worth exploring! Here are a few popular spots
                    </p>
                    <img
                        src={titleShape}
                        alt="titleShape"
                        className="w-[45%] object-contain absolute -bottom-12"
                    />
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {ToursData.map((tour) => (
                        <PopularTourCard
                            key={tour.id}
                            tour={tour}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
