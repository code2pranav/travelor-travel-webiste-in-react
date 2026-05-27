import React from 'react'
import headerbg from "../../../assets/Index/Hero/slider-bg.jpg"
import heroimg from "../../../assets/Index/Hero/right-pic.png"
import plan from "../../../assets/Index/Hero/Plane-With-Line.png"
import Mainbtn from '../../Buttons/Mainbtn'
import cloud1 from "../../../assets/Index/Hero/Cloud1.png"
import cloud2 from "../../../assets/Index/Hero/Cloud2.png"
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
export default function Hero() {
    return (
        <>
            <div
                className="hero relative bg-cover bg-center min-h-screen xl:min-h-0 overflow-hidden"
                style={{ backgroundImage: `url(${headerbg})` }}
            >
                <div className="bg-overly mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24 xl:h-screen flex items-center xl:flex-row flex-col xl:gap-0 gap-20">
                    <div className="hero-content w-full xl:ps-12.5 z-1">
                        <h3 className='text-5xl text-white font-kaushan!'>Discover</h3>
                        <h1 className='font-kaushan! font-semibold text-[160px] text-white hero-title'>The World</h1>
                        <div className='mt-5 md:mt-10'>
                            <p className='text-white pera-text'>
                                The Safety of our customers at all stages
                            </p>
                            <Mainbtn to='/contact' className='mb-8' text={"Get In Touch"} />
                            <div className='flex items-start md:items-center flex-col md:gap-0 gap-4 md:flex-row text-gray-50'>
                                <span className='follow-icons'>Follow Us</span>
                                <ul className='flex items-center space-x-3'>
                                    <li>
                                        <Link to="https://facebook.com/" className='hover:text-prim hover:-translate-y-2 transition-all duration-300'>
                                            <Icon icon="ic:baseline-facebook" width="24" height="24" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://instagram.com" className='hover:text-prim hover:-translate-y-2 transition-all duration-300'>
                                            <Icon icon="lets-icons:insta" width="24" height="24" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className='hover:text-prim hover:-translate-y-2 transition-all duration-300'>
                                            <Icon icon="ri:linkedin-fill" width="24" height="24" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/" className='hover:text-prim hover:-translate-y-2 transition-all duration-300'>
                                            <Icon icon="mdi:youtube" width="24" height="24" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image w-full xl:w-1/2 relative xl:absolute flex justify-center items-center right-0 xl:right-35 xl:bottom-0 h-full">
                        <img src={heroimg} alt="hero-img" className='h-full w-full xl:w-auto z-2 xl:translate-y-15' />
                        <div className='plan absolute w-120 h-auto top-50 -left-10 xl:block hidden'>
                            <img src={plan} alt="plan-img" className='h-full w-full' />
                        </div>
                        <div className='offer flex flex-col'>
                            <span>Get Up To</span>
                            <span>50% </span>
                            <span>Discount</span>
                        </div>
                    </div>
                    <div className='circle-area absolute top-0 left-0 bottom-0 right-0 overflow-hidden'>
                        <div className="circle1-wrap">
                            <div className="rotate-center circle-bg circle1-bg">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle2-wrap">
                            <div className="rotate-center-reverse circle-bg circle2-bg">
                            </div>
                        </div>
                        <div className="circle3-wrap">
                            <div className="rotate-center circle-bg circle3-bg">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cloud1 md:block hidden">
                    <div className="cloud-image1 relative overflow-hidden z-0">
                        <img src={cloud1} alt="cloud-img" className='w-auto' />
                    </div>
                </div>
                <div className="cloud2 md:block hidden">
                    <div className="cloud-image2 relative overflow-hidden z-0">
                        <img src={cloud2} alt="cloud-img" className='w-auto' />
                    </div>
                </div>
            </div >
        </>
    )
}
