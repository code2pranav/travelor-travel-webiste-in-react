import React from "react";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import sectionbanner from "../../assets/section-banner.jpg"
import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";
import ToursData from "../../Data/PopularTour.json";

import destination1 from "../../assets/PopularToursPage/destinationdetails-image01.png"
import destination2 from "../../assets/PopularToursPage/destinationdetails-image02.png"
import destination3 from "../../assets/PopularToursPage/destinationdetails-image03.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Mainbtn from "../../Components/Buttons/Mainbtn";

import icon1 from "../../assets/PopularToursPage/hotels.png"
import icon2 from "../../assets/PopularToursPage/Sightseeing.png"
import icon3 from "../../assets/PopularToursPage/car.png"
import icon4 from "../../assets/PopularToursPage/meal.png"

export default function ToursDetails() {
    const { id } = useParams();

    const tour = ToursData.find((item) => item.id === parseInt(id));

    if (!tour) return <h2>Tour Not Found</h2>;

    return (
        <>
            <div className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative" style={{ backgroundImage: `url(${sectionbanner})` }}>
                <div className="section-content z-0 text-center">
                    <h4 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary'>{tour.title}</h4>
                    <ul className='flex items-center flex-wrap justify-center gap-2'>
                        <li>
                            <Link to="/" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Home</Link>
                        </li>
                        <span className='text-secondary'>/</span>
                        <li>
                            <Link to="/" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Tour Package</Link>
                        </li>
                        <span className='text-secondary'>/</span>
                        <li>
                            <Link to="/tours" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>{tour.title}</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#EFFFFF] flex justify-between items-start gap-10 flex-wrap lg:flex-nowrap">
                <div className="tour-left bg-white rounded-3xl w-full lg:w-[70%]">
                    <div className="p-5 md:p-10">
                        <div className="flex items-center gap-2 text-secondary text-sm pb-5">
                            ({tour.review})
                            <div className="flex items-center">
                                <Icon icon="material-symbols:star-rounded" width="20" height="20" className="text-yellow" />
                                <Icon icon="material-symbols:star-rounded" width="20" height="20" className="text-yellow" />
                                <Icon icon="material-symbols:star-rounded" width="20" height="20" className="text-yellow" />
                                <Icon icon="material-symbols:star-rounded" width="20" height="20" className="text-yellow" />
                                <Icon icon="material-symbols:star-rounded" width="20" height="20" className="text-yellow" />
                            </div>
                        </div>
                        <h3 className="text-4xl font-medium text-secondary pb-3">{tour.title}</h3>
                        <p className="text-sm text-secondary">{tour.Places}</p>
                        <div className="relative pt-8">
                            <button className="des-prev absolute left-4 top-1/2 -translate-y-1/2 z-10
                                                   w-12 h-12 rounded-full bg-yellow text-white cursor-pointer hidden md:flex items-center justify-center shadow">
                                <Icon icon="ep:arrow-left-bold" width="24" height="24" />
                            </button>

                            <button className="des-next absolute right-4 top-1/2 -translate-y-1/2 z-10
                                                w-12 h-12 rounded-full bg-yellow text-white cursor-pointer hidden md:flex items-center justify-center shadow">
                                <Icon icon="ep:arrow-right-bold" width="24" height="24" />
                            </button>

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: ".des-prev",
                                    nextEl: ".des-next",
                                }}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                                className="rounded-3xl"
                            >
                                <SwiperSlide>
                                    <img src={destination1} alt="destination-1" className="w-full h-full object-cover" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={destination2} alt="destination-2" className="w-full h-full object-cover" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={destination3} alt="destination-3" className="w-full h-full object-cover" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <h3 className="text-4xl font-medium text-secondary pb-5 pt-8">Package Overview</h3>
                        <p className="text-secondary text-md">Experience Phuket, Krabi, and Phi Phi Islands with turquoise waters and scenic beaches. A perfect blend of island tours, snorkeling, and leisure time.</p>
                        <ul className="space-y-5 pt-5">
                            <li className="flex items-center gap-2 text-secondary font-normal">
                                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className="text-[#85D200]" />
                                <span>Phuket, Krabi & Phi Phi Island stays</span>
                            </li>
                            <li className="flex items-center gap-2 text-secondary font-normal">
                                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className="text-[#85D200]" />
                                <span>Snorkeling and island-hopping tours</span>
                            </li>
                            <li className="flex items-center gap-2 text-secondary font-normal">
                                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className="text-[#85D200]" />
                                <span>Sunset viewpoints & beach activities</span>
                            </li>
                            <li className="flex items-center gap-2 text-secondary font-normal">
                                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className="text-[#85D200]" />
                                <span>Great for couples & friends</span>
                            </li>
                        </ul>
                        <h3 className="text-4xl font-medium text-secondary pt-5">Additional Easemytrip Delights</h3>
                        <ul className="space-y-5 pt-5">
                            <li className="flex items-center gap-2 text-secondary font-normal">
                                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className="text-[#85D200]" />
                                <span>Local Thailand travel assistance.</span>
                            </li>
                            <li className="flex items-center gap-2 text-secondary font-normal">
                                <Icon icon="material-symbols:check-circle-rounded" width="25" height="25" className="text-[#85D200]" />
                                <span>Island tour upgrades available.</span>
                            </li>
                        </ul>
                        <h3 className="text-4xl font-medium text-secondary py-5">Day Wise Itinerary</h3>
                        <div className="bg-yellow-light p-5 md:p-10 rounded-3xl">
                            {Object.entries(tour.DaysDescription).map(([dayKey, dayData], index) => (
                                <div key={dayKey} className="list-content flex items-start flex-col md:flex-row mb-8 gap-3">
                                    <div className="duration text-center min-w-12">
                                        <div className="media w-11.5 h-11.5 bg-yellow rounded-full flex justify-center items-center mt-1.25">
                                            <div className="green-bg w-9.5 h-9.5 bg-secondary rounded-full flex justify-center items-center font-afacad text-2xl font-bold text-white">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <span className="text-lg inline-block text-secondary uppercase font-medium">
                                            Day
                                        </span>
                                    </div>

                                    <div className="info md:ps-10 flex-1">
                                        <h4 className="text-2xl font-medium text-secondary font-figtree pb-5">
                                            Day {index + 1}: {dayData.title}
                                        </h4>

                                        <ul className="space-y-3">
                                            {dayData.list.map((item, i) => (
                                                <li key={i} className="flex items-start flex-wrap gap-2">
                                                    <Icon
                                                        icon="material-symbols:check-circle-rounded"
                                                        width="18"
                                                        height="18"
                                                        className="text-yellow-500 mt-1 min-w-5 min-h-5"
                                                    />
                                                    <span className="text-sm text-secondary">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="tour-right w-full lg:w-[30%]">
                    <div className="content bg-white p-5 md:p-10 border border-gray-200 rounded-3xl">
                        <span className="block text-secondary text-sm font-medium pb-2">Starting from</span>
                        <span className="text-secondary text-5xl font-semibold font-figtree">{tour.price}</span>
                        <span className="text-secondary text-sm">/ Person</span>
                        <Mainbtn text={"Enquire Now"} className="block! w-fit! mt-6" />
                    </div>
                    <div className="content bg-white p-5 md:p-10 border border-gray-200 rounded-3xl mt-8">
                        <ul className="tour-time-duration">
                            <li>
                                <span class="font-bold">
                                    Duration :
                                </span>
                                <span class="ng-binding"> {tour.Duration}</span>
                            </li>
                            <li>
                                <span class="font-bold">
                                    Places to Visit :
                                </span>
                                <span class="trv-tmi-hlo-info"> {tour.Places}</span>
                            </li>
                        </ul>
                        <div className="relative my-10 btn-package text-center w-full z-1">
                            <span>Package Includes</span>
                        </div>
                        <div className="icon-man-holids">
                            <ul className="flex justify-between flex-wrap">
                                <li>
                                    <div className="holids-icon">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <div className="my-4">Hotels</div>
                                </li>

                                <li>
                                    <div className="holids-icon">
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    <div className="my-4">Sightseeing</div>
                                </li>

                                <li>
                                    <div className="holids-icon">
                                        <img src={icon3} alt="icon" />
                                    </div>
                                    <div className="my-4">Transfer</div>
                                </li>

                                <li>
                                    <div className="holids-icon">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <div className="my-4">Meal</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}