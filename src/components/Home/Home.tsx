import Hero from "../shared/Hero/Hero";
import PopularProjects from "./PopularProjects";
import Heading from "../shared/Heading";
import Banner from "./Banner";
import ClientLogo from "../shared/ClientLogo";
import ImageCardLeft from "./ShowImageCard";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>QuadCorp - Drones | Manufacturing | Consulting</title>
        <meta
          name="description"
          content="Affirmity Corp is dedicated to empowering businesses and organisations across diverse industries to unlock their full potential through the cutting-edge power of AI."
        />
      </Helmet>
      <main className="w-full flex flex-col relative">
        <Hero />

        <Heading />

        <PopularProjects />
        <Banner />

        <ImageCardLeft />
        {/* <ClientLogo /> */}
        <Awards />
      </main>
    </>
  );
};

const Awards = () => {
  return (
    <section className="w-full justify-center flex relative ">
      <div className="w-full h-full flex flex-col  md:gap-[10vh] pt-10 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  justify-center  ">
        <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 ">
          <span className="text-[24px] md:text-[48px] font-medium ">
            Quality Assurance
          </span>
          {/* <div className="w-full grid grid-cols-3 md:grid-cols-3 min-[996px]:grid-cols-5 gap-6 place-content-center "> */}
          <div className="w-full flex flex-row gap-x-14 gap-y-8 flex-wrap justify-center items-center">
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/9001.webp"
                alt=" startup"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/start.webp"
                alt=" startup"
                className="w-full h-full object-contain object-center scale-[1.1]"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/27001.webp"
                alt=" startup"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/msme.webp"
                alt=" msme"
                className="w-full h-full object-cover object-center invert"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/27701.webp"
                alt=" startup"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/cmmi5.webp"
                alt=" startup"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/42001.webp"
                alt=" startup"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
