import React from 'react'
import titleShape from "../../../assets/Index/BookingSteps/Title-Shape.png";

import tour1 from "../../../assets/Index/Tours/Tour-image-01.jpg"
import tour2 from "../../../assets/Index/Tours/Tour-image-02.jpg"
import tour3 from "../../../assets/Index/Tours/Tour-image-03.jpg"
import tour4 from "../../../assets/Index/Tours/Tour-image-04.jpg"
import tour5 from "../../../assets/Index/Tours/Tour-image-05.jpg"
import { Icon } from '@iconify/react';
import Mainbtn from '../../Buttons/Mainbtn';
import tourData from "../../../Data/PopularTour.json"
import PopularTourCard from '../../PopularTourCard/PopularTourCard';

export default function Tours() {
    return (
        <>
            <div className="bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
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
                    {tourData.slice(0, 4).map((tour) => (
                        <PopularTourCard tour={tour} />
                    ))}
                </div>
            </div>
        </>
    )
}
