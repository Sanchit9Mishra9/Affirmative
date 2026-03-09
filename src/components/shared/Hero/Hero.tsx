import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import HeroCard from "./HeroCard";
import { Link } from "react-router-dom";

// Defining Future Enterprises Accelerating Growth
const Hero = () => {
  return (
    <div className="w-full max-w-full   pt-20 md:py-20">
      <HeroText />
      {/* Explore More */}
      <ExploreMore />
      {/* Herp card */}
      <HeroCard />
    </div>
  );
};

export default Hero;

const HeroText = () => {
  const { scrollYProgress } = useScroll();
  const firstRowX = useTransform(scrollYProgress, [0, 0.05], ["0%", "10%"]);
  const secondRowX = useTransform(scrollYProgress, [0, 0.1], ["0%", "-29%"]);

  return (
    <div className=" w-full min-w-full  px-8 py-4  flex flex-col  gap-2  md:my-12">
      {/* First Row */}
      <div className="w-full   flex justify-start ">
        <motion.div
          style={{ x: firstRowX }}
          className="flex items-center w-fit  "
        >{/* Forging the Future of Battlefield Supremacy */}
          {/* first word */}
          <div className="relative w-[47vw] md:w-[27vw] h-[10vw]  md:h-[7vw] overflow-hidden flex justify-start  items-center ">
            <Word word="FORGING" />
            {/* <img src="/banner/defining.svg" alt="" /> */}
          </div>
          {/* Second word */}
          <div className="relative w-[38vw]  md:w-[14vw] h-[10vw]  md:h-[7vw] overflow-hidden flex justify-start  items-center">
            <Word word="THE" />
          </div>
          {/* Third word */}
          <div className="relative w-[39vw] h-[10vw]  md:h-[7vw] overflow-hidden hidden md:flex justify-start  items-center">
            <Word word="FUTURE OF" />
          </div>
        </motion.div>
      </div>
      {/* Second row view */}
      <div className="w-full md:hidden  flex  justify-end">
        <motion.div
          style={{ x: firstRowX }}
          className="flex items-center w-fit  "
        >
          {/* Third word */}
          <div className="relative w-[68vw]  md:w-[38vw] h-[10vw]  md:h-[7vw] overflow-hidden flex justify-start  items-center">
            <Word word="FUTURE OF" />
          </div>
        </motion.div>
      </div>

      {/* third Row */}
      {/*  */}
      <div className="w-full flex items-center  justify-start   md:justify-end  ">
        <motion.div
          style={{ x: secondRowX }}
          className="w-fit flex items-center "
        >
          {/* first word */}
          <div className="relative w-[62vw]  md:w-[38vw] h-[10vw]  md:h-[7vw] overflow-hidden flex justify-start  items-center ">
            <Word word="BATTLEFIELD" />
          </div>
          {/* Second word */}
          <div className="relative w-[36vw] h-[10vw]  md:h-[7vw] overflow-hidden hidden md:flex justify-start  items-center  ">
            <Word word="SUPREMACY" />
          </div>
        </motion.div>
      </div>

      {/* fourth */}
      <div className="w-full md:hidden flex items-center   justify-end  ">
        <motion.div
          style={{ x: secondRowX }}
          className="w-fit flex items-center "
        >
          {/* Second word */}
          <div className="relative w-[60vw] h-[10vw]  md:h-[7vw] overflow-hidden  flex justify-start  items-center  ">
            <Word word="SUPREMACY" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Word = ({ word }: { word: string }) => {
  return (
    <motion.span
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="absolute text-[10vw]  md:text-[6vw] text-002E62 select-none hero-font"
    >
      {word}
    </motion.span>
  );
};

const ExploreMore = () => {
  return (
    <div className="w-full flex justify-center items-center mt-4 relative overflow-hidden  h-8">
      <motion.div
        initial={{ y: "150%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1.5,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="absolute flex  justify-center items-center gap-2 group  cursor-pointer w-fit"
      >
        <Link to="/innovation">
          <span className="text-xl ">GUARDIAN OF TOMORROW’S BATTLEFIELD</span>
        </Link>
        <div className="bg-gradient-to-r from-purple-800 via-red-500  to-orange-500  group-hover:bg-slate-200  transition-all duration-200 ease-linear">
          <Link to="/innovation">
            <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-black    transition-all duration-200 ease-linear" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
