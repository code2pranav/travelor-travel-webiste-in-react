import React from 'react'
import Hero from './Hero/Hero'
import BookingSteps from './BookingSteps/BookingSteps'
import TopDestination from './TopDestination/TopDestination'
import About from './About/About'
import TourGuide from './TourGuide/TourGuide'
import Testimonials from './Testimonials/Testimonials'
import Banner from './Banner/Banner'
import Counter from './Counter/Counter'
import Blogs from './Blogs/Blogs'
import TourCategories from './TourCategories/Tourcategories'
import Tours from './Tours/Tours'

export default function Index() {
    return (
        <>
            <Hero />
            <About />
            <BookingSteps />
            <TopDestination />
            <TourGuide />
            <TourCategories />
            <Testimonials />
            <Banner />
            <Counter />
            <Tours />
            <Blogs />
        </>
    )
}
