

import heroBg from '../../../assets/heroBg.jpg';
import heroCharacter from '../../../assets/heroCharacter.png'
import clouds from '../../../assets/clouds.json'
import Lottie from "lottie-react";

const Hero = () => {
    return (
 
        <div className='min-h-screen object-cover bg-right	 bg-no-repeat relative' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className='secondary-container'>
                    {/* <Lottie className='h-[600px] w-[500px] absolute -top-[30vh] -left-16 block' animationData={clouds} />  */}
                    <div className='ml-6 bottom-[35vh] absolute z-20'>
                        <h1 className="text-3xl  md:text-5xl font-bold text-primary ">Develop your kid <br /> with toys!</h1>
                        <p className="py-6 w-4/6 md:w-1/2 font-semibold text-slate-700">{`Our kids are our future, but it seems like they don't care at all! Don't worry, though. They enjoy playing, right? If we give them the smart toys, they will grow just right, even while playing!`}</p>
                        <button className="primary-button">Get Started</button>
                    </div>
                    <div className='absolute inset-0 bg-black opacity-10'></div>
                    
            </div>
           
            <div>
                <img src={heroCharacter} className="overflow-hidden max-w-[440px] sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl absolute bottom-0 -right-[22vh] md:-right-[15vh] xl:right-[8vh]" />
            </div>
        </div>
    );
};

export default Hero;