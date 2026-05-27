import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Mainbtn from "../Buttons/Mainbtn";

export default function PopularTourCard({ tour }) {
    return (

        <div className="tour-card transition-all duration-300 cursor-pointer">

            <div className="popular-tour-image">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="popular-tour-content p-4">
                <h4 className="text-lg text-secondary font-medium pb-3 hover:text-yellow transition-colors duration-300">
                    {tour.title}
                </h4>

                <ul className="flex justify-between items-center pb-5">
                    <li className="flex gap-1 text-xs text-secondary font-medium items-center">
                        ({tour.review})

                        <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, i) => (
                                <Icon
                                    key={i}
                                    icon="material-symbols:star-rounded"
                                    width="18"
                                    height="18"
                                    className="text-yellow"
                                />
                            ))}
                        </div>
                    </li>

                    <li className="flex items-center gap-2 text-sm text-secondary font-medium">
                        <Icon
                            icon="simple-line-icons:calendar"
                            width="20"
                            height="20"
                        />
                        {tour.days}
                    </li>
                </ul>

                <div className="flex items-center justify-between">
                    <Mainbtn to={`/tours/${tour.id}`} text="Book Now" className="py-2! px-4! text-sm!" />

                    <div className="tour-price flex items-center gap-1 text-secondary">
                        <span className="text-2xl font-bold">
                            {tour.price}
                        </span>
                        <span className="text-sm">Per day</span>
                    </div>
                </div>
            </div>
        </div>
    );
}