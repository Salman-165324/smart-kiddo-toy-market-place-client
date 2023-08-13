import heroBg from "../../../assets/heroBg.jpg";
import heroCharacter from "../../../assets/heroCharacter.png";
import clouds from "../../../assets/clouds.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div
      className="h-fit back bg-fixed md:h-[65vh] lg:min-h-screen object-cover bg-right bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="secondary-container h-screen flex pt-8 md:pt-10 xl:pt-2 xl:items-center">
        <div className="px-4 md:ml-0 lg:ml-7 lg:px-4 xl:w-[60%]">
          {/* <Lottie className=' h-[600px] w-[500px] absolute -top-[30vh] -left-16 block' animationData={clouds} /> */}
          {/* <h1 className="text-4xl hidden lg:block  md:text-6xl tracking-widest font-bold text-[#121b44] uppercase">Develop your kids <br /> with toys!</h1> */}
          <h1 className="text-4xl  md:text-6xl tracking-widest font-bold text-[#121b44] uppercase">
            Develop your kids with toys!
          </h1>
          <p className="py-6  md:text-xl font-semibold text-[#3e2f4d] md:w-[70%] ">{`Our kids are our future, but it seems like they don't care at all! Don't worry, though. They enjoy playing, right? If we give them the smart toys, they will grow just right, even while playing!`}</p>
          <button className="primary-button">Get Started</button>
        </div>
        {/* <div className='absolute inset-0 bg-yellow-200 opacity-30'></div> */}
      </div>

      <div className="">
        <img
          src={heroCharacter}
          className="max-w-[50vh]  sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl absolute bottom-0 -right-[12vh] md:-right-[10vh] xl:-right-[3vh] max-h-[60vh] lg:max-h-[75vh] xl:max-h-[90vh]"
        />
      </div>
    </div>
  );
};

export default Hero;
