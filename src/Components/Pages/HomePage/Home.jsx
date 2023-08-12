import { useEffect } from "react";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import Hero from "./Hero";
import ShoppingByCategory from "./ShoppingByCategory";
import Testimonial from "./Testimonial";
import FeaturedSection from "./FeaturedSection";



const Home = () => {
    
    return (
        <div className="overflow-hidden">
            <Hero></Hero>
            <ShoppingByCategory></ShoppingByCategory>
            <FeaturedSection />
            <Gallery ></Gallery>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;