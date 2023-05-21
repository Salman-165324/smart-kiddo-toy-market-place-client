

import heroBg from '../../../assets/heroBg.jpg';
import heroCharacter from '../../../assets/heroCharacter.png'
import clouds from '../../../assets/clouds.json'
import Lottie from "lottie-react";

const Hero = () => {
    return (
        // <div className="hero min-h-screen bg-base-200"  style={{ backgroundImage: `url(${heroBg})` }}>
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <img src={heroCharacter} className="max-w-sm" />
        //         <div>
        //         <Lottie className='sm:h-[500px] w-[400px]' animationData={clouds} />
        //             <h1 className="text-5xl font-bold text-primary">Develop your kid <br /> with toys!</h1>
        //             <p className="py-6 text-neutral1">{`Our kids are our future, but it seems like they don't care at all! Don't worry, though. They enjoy playing, right? If we give them the right toys, they will grow just right, even while playing!`}</p>
        //             <button className="primary-button">Get Started</button>
        //         </div>
        //     </div>
        // </div>

        <div className='min-h-screen object-cover bg-right	 bg-no-repeat relative' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className='secondary-container'>
                    <Lottie className='h-[600px] w-[500px] block' animationData={clouds} />
                    <div className='ml-14 bottom-[35vh] absolute bg-blend-overlay'>
                        <h1 className=" text-5xl font-bold text-primary">Develop your kid <br /> with toys!</h1>
                        <p className="py-6 w-1/2 text-gray-600 font-semibold">{`Our kids are our future, but it seems like they don't care at all! Don't worry, though. They enjoy playing, right? If we give them the right toys, they will grow just right, even while playing!`}</p>
                        <button className="primary-button">Get Started</button>
                    </div>
          
            </div>
            <div>
                <img src={heroCharacter} className=" md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl absolute bottom-0 -right-[14vh] xl:right-[10vh]" />
            </div>
        </div>
    );
};

export default Hero;