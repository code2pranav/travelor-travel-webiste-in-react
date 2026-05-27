import React, { useState } from "react";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import sectionbanner from "../../assets/section-banner.jpg"
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";

import ballon from "../../assets/ErrorPage/hotballon-error.png"
import cloudbg from "../../assets/ErrorPage/error-bg-cloud.png"
import Mainbtn from "../../Components/Buttons/Mainbtn";

import errorbg from "../../assets/ErrorPage/error-bg.png"

export default function Page404() {
    return (
        <>
            <div className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative" style={{ backgroundImage: `url(${sectionbanner})` }}>
                <div className="section-content z-0 text-center">
                    <h4 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary'>Page not found</h4>
                    <ul className='flex items-center flex-wrap justify-center gap-2'>
                        <li>
                            <Link to="/" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Home</Link>
                        </li>
                        <span className='text-secondary'>/</span>
                        <li>
                            <Link to="/tourguide" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>404 - Not Found</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="404-page bg-[#EFFFFF] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-center flex-wrap lg:flex-nowrap gap-10 bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${cloudbg})` }}>
                <div className="content w-full lg:w-1/2">
                    <div className="title">

                        <span className="block text-[40px] font-semibold tracking-wider text-secondary leading-none">
                            Oops!
                        </span>

                        <h1 className="flex items-center justify-center flex-wrap text-[180px] md:text-[220px] lg:text-[260px] 
                 font-semibold leading-[0.8] 
                 drop-shadow-[0px_26px_10px_rgba(6,97,104,0.26)] text-secondary">

                            4

                            <img
                                src={ballon}
                                alt="balloon-img"
                                className="error-ballon-img mx-4 object-contain"
                            />

                            4

                        </h1>

                    </div>
                    <div className="page-not-found-title text-center mt-10">
                        <span className="block text-[40px] font-semibold text-secondary font-figtree">Page Not Found</span>
                        <p className="text-secondary text-lg lg:w-sm mx-auto pb-5">The page you're looking for isn't available. Try searching again or go back home.</p>
                        <Mainbtn text={"Back to Home"} to="/" />
                    </div>
                </div>
                <div className="error-img w-full lg:w-1/2">
                    <img src={errorbg} alt="error-img" className="w-full h-full" />
                </div>
            </div>
        </>
    )
}
