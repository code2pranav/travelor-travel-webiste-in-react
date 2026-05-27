import React from "react";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";
import sectionbanner from "../../assets/section-banner.jpg"
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import blogdata from "../../Data/Blogs.json"

export default function Blogs() {
    return (
        <>
            <div className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative" style={{ backgroundImage: `url(${sectionbanner})` }}>
                <div className="section-content z-0 text-center">
                    <h4 className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary'>Blogs</h4>
                    <ul className='flex items-center flex-wrap justify-center gap-2'>
                        <li>
                            <Link to="/" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Home</Link>
                        </li>
                        <span className='text-secondary'>/</span>
                        <li>
                            <Link to="/blogs" className='cursor-pointer text-sm lg:text-lg font-medium text-secondary'>Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="blog-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
                {blogdata.map((item) => (
                    <BlogCard key={item.id} blog={item} />
                ))}
            </div>
        </>
    )
}
