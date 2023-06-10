import { useEffect } from "react";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import Hero from "./Hero";
import ShoppingByCategory from "./ShoppingByCategory";
import Testimonial from "./Testimonial";



const Home = () => {
    
    return (
        <div>
            <Hero></Hero>
            <ShoppingByCategory></ShoppingByCategory>
            <Gallery ></Gallery>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;