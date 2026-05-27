import React, { useState } from "react";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import sectionbanner from "../../assets/section-banner.jpg"
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";

import faqimg from "../../assets/faq-media.png"

import contactbg from "../../assets/con-sec-bg.jpg"

import Mainbtn from "../../Components/Buttons/Mainbtn.jsx"

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            id: 1,
            question: "1 - How do I book a tour package?",
            answer:
                "You can book your desired tour package directly through our website by selecting the package, choosing the travel dates, and completing the online payment.",
        },
        {
            id: 2,
            question: "2 - Can I customize my travel itinerary?",
            answer:
                "Yes! Most of our tour packages are customizable. You can modify hotels, activities, and travel dates based on availability.",
        },
        {
            id: 3,
            question: "3 - What payment methods do you accept?",
            answer:
                "We accept major credit/debit cards, net banking, UPI, and secure wallet payments.",
        },
        {
            id: 4,
            question: "4 - Will I receive confirmation after booking?",
            answer:
                "Yes, you’ll receive an instant email or WhatsApp confirmation along with your booking details and invoice.",
        },
        {
            id: 5,
            question: "5 - Are flights included in the package?",
            answer:
                "Flight inclusion depends on the package. Check the Inclusions section for each package to confirm what’s covered.",
        },
        {
            id: 6,
            question: "6 - Can I cancel or reschedule my booking?",
            answer:
                "Yes, cancellations and date changes are allowed based on the package policy. Cancellation charges may apply.",
        },
        {
            id: 7,
            question: "7 - Is travel insurance included?",
            answer:
                "Travel insurance is optional and can be added during the booking process for an additional fee.",
        },
        {
            id: 8,
            question: "8 - Do you provide visa assistance?",
            answer:
                "Yes, we offer complete visa assistance including documentation guidance, appointment help, and submission support.",
        },
    ];

    return (
        <>
            <div className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative" style={{ backgroundImage: `url(${sectionbanner})` }}>
                <div className="section-content z-0 text-center">
                    <h4 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary'>Frequently Asked Questions</h4>
                    <ul className='flex items-center flex-wrap justify-center gap-2'>
                        <li>
                            <Link to="/" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Home</Link>
                        </li>
                        <span className='text-secondary'>/</span>
                        <li>
                            <Link to="/tourguide" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Frequently Asked Questions</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-[#EFFFFF]'>
                <div className="w-full xl:w-[50%] title relative h-full">
                    <h1 className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
                        Find <span className="text-yellow"> Answers </span> for Questions You Have.
                    </h1>
                    <p className='text-gray-500 pb-5'>
                        Travlla is a multi-award-winning strategy and content creation agency that specializes in travel marketing.
                    </p>
                    <div className="relative">
                        <img src={faqimg} alt="faq-img" className="sm:ms-10" />
                        <div className="faq-element flex-wrap">
                            <Icon icon="la:quote-left" width="32" height="32" />
                            <h3>Give us a chance to help you!</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <div className="service-table2 mb-8">
                        {faqs.map((faq, index) => (
                            <li key={faq.id} className="p-5 border-b border-gray-200 list-none!">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center cursor-pointer"
                                >
                                    <span className="text-lg font-medium text-secondary text-start">
                                        {faq.question}
                                    </span>

                                    <Icon
                                        icon="lsicon:right-outline"
                                        width="35"
                                        height="35"
                                        className={`text-secondary transition-all duration-300 ${activeIndex === index ? "rotate-90 text-yellow" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 pt-3" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-sm md:text-lg font-light text-secondary">
                                        {faq.answer}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </div>

                </div>
            </div>

            <div className="contact-faq px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${contactbg})` }}>
                <div className="absolute bg-black/30 top-0 left-0 w-full h-full"></div>
                <div className="w-full lg:w-[50%] title relative h-full p-5 sm:py-10 sm:px-10 md:py-15 md:px-12.5 rounded-2xl border border-gray-200 backdrop-blur-[5px]">
                    <h1 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
                        <span className="text-yellow"> Reach </span> & Get in Touch With Us!
                    </h1>
                    <p className='text-gray-200 pb-5'>
                        We’love to hear from you. Our friendly team is always here to chat
                    </p>

                    <form method="post" className="space-y-8">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full rounded-full px-6 py-4
                     text-gray-700 placeholder-gray-500 font-light bg-white outline-none
                     transition duration-300"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full rounded-full px-6 py-4
                     text-gray-700 placeholder-gray-500 font-light bg-white outline-none
                     transition duration-300"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Add Your Subject"
                            className="w-full rounded-full px-6 py-4
                     text-gray-700 placeholder-gray-500 font-light bg-white outline-none
                     transition duration-300"
                            required
                        />

                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full rounded-3xl px-6 py-4
                     text-gray-700 placeholder-gray-500 font-light bg-white outline-none
                     transition duration-300 resize-none"
                            required
                        ></textarea>

                        <Mainbtn text={"Send Message"} />
                    </form>
                </div>

            </div>
        </>
    )
}
