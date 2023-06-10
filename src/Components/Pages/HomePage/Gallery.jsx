import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Gallery = () => {
    useEffect(()=>{

        Aos.init();

    },[])
    return (
        <div className='primary-container' data-aos = 'flip-down'>
            <h1 className="mx-auto text-center section-title">Our Best Products Gallery</h1>
          
            <section className="text-gray-600 body-font">
                <div className="container mt-16 px-5 mx-auto flex flex-wrap">


                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/RPG2ZjF/rebote-Arm-Kit.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/FzT9f1Q/math-Box-Deluxe.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/xmrc9X8/Language-Learning-Book.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/s3pSQd1/engineering-set.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/Wpj771Z/alphabet-Blocks.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/ftQQDZ7/Engineering-Building-Blocks.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;