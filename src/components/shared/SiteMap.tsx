import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

export default function Sitemap() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Sitemap</title>
        <meta
          name="description"
          content="Quadcorp Labs sitemap for easy navigation to all pages."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[30vh] md:h-[50vh] relative flex justify-center items-center  ">
          <img
            src="/contact/contact-bg.webp"
            alt=" Terms of use"
            className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.50]"
          />
          <Banner />
        </div>
        <Content />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-full  flex flex-col pt-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   z-10">
      <div className="w-full  flex flex-col items-start  justify-start h-full">
        {/* navigation */}
        <div className="flex w-fit gap-3 md:mt-8">
          <div className="w-fit flex gap-2 justify-center items-center">
            <span className="text-xs md:text-sm text-white">Sitemap</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
          </div>
        </div>

        {/* content */}

        <div className=" w-full flex flex-col  gap-6 md:gap-8 justify-end items-start  h-full  ">
          <span className="text-[32px] md:text-[6vw] font-semibold  flex text-white">
            Sitemap
          </span>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="w-full h-full  flex  pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  ">
        <div className="w-full md:w-[75%] flex  flex-col  gap-9 ">
          {/* home */}
          <div className="w-full flex flex-col gap-4">
            <span className="font-medium md:text-3xl text-slate-600">
              About us
            </span>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-3 gap-4">
              <LinkCard link="/" name="Overview" />
              <LinkCard link="/company" name="Company" />
              <LinkCard link="/careers" name="Careers" />
              <LinkCard link="/contact" name="Contact" />
            </div>
          </div>
          {/* industries */}
          <div className="w-full flex flex-col gap-4">
            <span className="font-medium md:text-3xl text-slate-600">
              Markets
            </span>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-3 gap-4 ">
              <LinkCard
                link="/industries/aerospace-and-defence"
                name="Defence"
              />
              <LinkCard link="/industries/government" name="Maritime" />
              <LinkCard link="/industries/healthcare" name="Emmergency Services" />
              <LinkCard link="/industries/travel" name="Armed Forces" />
              {/* <LinkCard link="/industries/oilandgas" name="Oil and Gas" /> */}
            </div>
          </div>
          {/* Services */}
          <div className="w-full flex flex-col gap-4">
            <span className="font-medium md:text-3xl text-slate-600">
              Services
            </span>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-1 gap-4 ">
              <div className="w-full flex flex-col gap-4">
                <span className="font-thin md:text-[18px] text-slate-600">
                  Simulation and Training
                </span>
                <LinkCard
                  link="/services/artificial-intelligence"
                  name="AI Simulation Platform"
                />
                <LinkCard
                  link="/services/application-development"
                  name="Testing Drones and Equipments"
                />
              </div>
            </div>
          </div>

          {/* Solutions */}

          <div className="w-full flex flex-col gap-4">
            <span className="font-medium md:text-3xl text-slate-600">
              Products
            </span>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-3 gap-4 ">
              <div className="w-full flex flex-col gap-4">
                <span className="font-thin md:text-[18px] text-slate-600">
                  Products
                </span>
                <LinkCard link="/solutions/intellicube" name="Intellicube" />
                <LinkCard link="/solutions/intellipad" name="Intellipad" />
                <LinkCard link="/solutions/acumen" name="Acumen" />
              </div>

              <div className="w-full flex flex-col gap-4">
                <span className="font-thin md:text-[18px] text-slate-300">
                  UAC
                </span>
                <LinkCard link="/solutions/ridrone" name="RI Drone" />
                <LinkCard link="/solutions/skydeck" name="Skydeck" />
                <LinkCard link="/solutions/shoora" name="Shoora" />
              </div>
              <div className="w-full flex flex-col gap-4">
                <span className="font-thin md:text-[18px] text-slate-300">
                  R & D
                </span>
                <LinkCard link="/solutions/ironbeam" name="IronBeam" />
                <LinkCard
                  link="/solutions/antimine-vehicle"
                  name="Anti-Mine Vehicle"
                />
                <LinkCard link="/solutions/aiweaponry" name="AI Weaponry" />
              </div>
              <div className="w-full flex flex-col gap-4">
                <span className="font-thin md:text-[18px] text-slate-300">
                  Solutions
                </span>
                <LinkCard
                  link="/solutions/pss"
                  name="Perimeter Security System "
                />
                <LinkCard
                  link="/solutions/gss"
                  name="Garrison Security System"
                />
                <LinkCard link="/solutions/dfa" name="Drone Feed Analysis" />
                <LinkCard
                  link="/solutions/cms"
                  name="Change Monitoring System"
                />
                <LinkCard link="/solutions/sarvadrishti" name="Sarva Drishti" />
                <LinkCard link="/solutions/seeker" name="Seeker" />
                <LinkCard link="/solutions/foreguard" name="Foreguard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkCard = ({ link, name }: { link: string; name: string }) => {
  return (
    <div className="flex gap-1 items-center">
      <ChevronRight className="w-4 h-4  text-slate-600" />
      <Link
        to={link}
        className="font-thin md:text-[18px] text-slate-600 leading-none hover:underline underline-offset-4"
      >
        {name}
      </Link>
    </div>
  );
};
