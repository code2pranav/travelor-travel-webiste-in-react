import React from "react";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import sectionbanner from "../../assets/section-banner.jpg"
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
import Mainbtn from "../../Components/Buttons/Mainbtn";

export default function Contact() {
    return (
        <>
            <div className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative" style={{ backgroundImage: `url(${sectionbanner})` }}>
                <div className="section-content z-0 text-center">
                    <h4 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary'>Contact Us</h4>
                    <ul className='flex items-center flex-wrap justify-center gap-2'>
                        <li>
                            <Link to="/" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Home</Link>
                        </li>
                        <span className='text-secondary'>/</span>
                        <li>
                            <Link to="/blogs" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#E6F1F3]">
                <div className="bg-white p-5 md:p-10 rounded-3xl w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331786942!2d73.09068539198522!3d22.32224063536357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1772012708310!5m2!1sen!2sin" style={{ width: "100%", borderRadius: "20px", height: "400px" }}></iframe>


                    <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-10 pt-10">
                        <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl lg:w-1/2">

                            <h1 className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
                                <span className="text-yellow">Reach</span> & Get in Touch With Us!
                            </h1>

                            <p className="text-gray-500 pb-8">
                                We’d love to hear from you. Our friendly team is always here to chat
                            </p>

                            <form method="post" className="space-y-6">

                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full rounded-full px-6 py-4 bg-white
                     text-gray-700 placeholder-gray-400
                     focus:ring-2 focus:ring-yellow focus:outline-none
                     transition duration-300"
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full rounded-full px-6 py-4 bg-white
                     text-gray-700 placeholder-gray-400
                     focus:ring-2 focus:ring-yellow focus:outline-none
                     transition duration-300"
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Add Your Subject"
                                    className="w-full rounded-full px-6 py-4 bg-white
                     text-gray-700 placeholder-gray-400
                     focus:ring-2 focus:ring-yellow focus:outline-none
                     transition duration-300"
                                    required
                                />

                                <textarea
                                    rows="5"
                                    placeholder="Message"
                                    className="w-full rounded-[30px] px-6 py-4 bg-white
                     text-gray-700 placeholder-gray-400
                     focus:ring-2 focus:ring-yellow focus:outline-none
                     transition duration-300 resize-none"
                                    required
                                />

                                <Mainbtn text={"Send Message"} />

                            </form>
                        </div>
                        <div className="flex flex-col lg:w-1/2 w-full">
                            <h4 className="text-5xl font-semibold text-secondary">Get in Touch</h4>
                            <p className="text-gray-500 mb-8">We’d love to hear from you! Please fill out the form below.</p>

                            <div className="flex justify-between items-start flex-col space-y-10">
                                <div class="flex items-center flex-wrap gap-6">
                                    <div class="w-20 h-20 bg-[#45869D] rounded-full flex items-center justify-center shadow-lg">
                                        <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                            <Icon icon="line-md:phone-call" width="35" height="35" className="text-[#53A4C0]" />
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-secondary text-lg">Contact Us</p>
                                        <p class="text-secondary text-2xl font-semibold tracking-wide">
                                            +1 123 456 7890
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-center flex-wrap gap-6">
                                    <div class="w-20 h-20 bg-rose-400 rounded-full flex items-center justify-center shadow-lg">
                                        <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                            <Icon icon="oui:email" width="35" height="35" className="text-rose-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-secondary text-lg">Send us a Mail</p>
                                        <p class="text-secondary text-2xl font-semibold tracking-wide">
                                            email@domain.com
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-center flex-wrap gap-6">
                                    <div class="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
                                        <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                            <Icon icon="lsicon:house-outline" width="35" height="35" className="text-teal-700" />
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-secondary text-lg">Address</p>
                                        <p class="text-secondary text-2xl font-semibold leading-snug">
                                            785 15h Street, Office 478 <br />
                                            Berlin, De 81566
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-5xl pt-15 font-kaushan! font-medium">Let's <span className="text-yellow">Talk</span> About You !</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
