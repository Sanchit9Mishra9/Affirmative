import { motion } from "framer-motion";
import { AerospaceAndDefenceIndustriesData } from "../IndustriesData";
import { Link } from "react-router-dom";

export default function IndustriesOurOfferings({
  offerings,
}: {
  offerings: typeof AerospaceAndDefenceIndustriesData.offerings;
}) {
  return (
    <div className="w-full flex justify-center   relative ">
      <motion.div
        initial={{ height: "0%" }}
        whileInView={{ height: "70%" }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: false }}
        className=" absolute top-[30%] left-0 w-[20px] bg-violet-500 hidden md:block"
      ></motion.div>
      <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6  max-w-7xl   md:px-10  min-[1280px]:px-4  md:gap-14  ">
        <div className="w-full flex flex-col gap-4 items-start">
          <span className="text-[6vw] md:text-[4vw] font-medium leading-none text-purple-600">
            Our Offerings
          </span>
          <p className=" md:text-[1.7rem]  md:leading-[2.7rem] md:w-[80%] w-full text-slate-300">
            {offerings.heading}
          </p>
        </div>

        <div className="w-full relative max-md:hidden">
          <div className="w-full md:w-[85%] absolute right-0 border-t "></div>
        </div>

        <div className="w-full md:gap-10 gap-4 flex flex-col md:flex-row  relative ">
          <div className="w-full md:w-[30%] h-fit max-md:py-4 flex md:items-end  md:flex-col gap-2  text-slate-400 md:px-4">
            <span className="text-[1.5rem] md:text-[2.5rem] font-medium leading-none">
              Explore
            </span>
            <span className="text-[1.5rem] md:text-[2.5rem] font-medium leading-none">
              Services
            </span>
          </div>

          <div className="w-full md:w-[70%]   grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-3  md:gap-8 gap-6">
            <div className="w-full flex flex-col justify-start md:items-center gap-2  ">
              <span className="text-xl md:text-2xl font-medium text-slate-400  w-full">
                Artificial <br className="max-md:hidden" />
                Intelligence
              </span>

              <LinkCard
                link="/services/artificial-intelligence"
                title="AI & Automation"
              />

              <LinkCard
                link="/services/artificial-intelligence"
                title="Customer Self-Service"
              />

              <LinkCard
                link="/services/artificial-intelligence"
                title="Cognitive Solutions"
              />
              <LinkCard
                link="/services/artificial-intelligence"
                title="AI and Analytics"
              />
            </div>

            <div className="w-full flex flex-col justify-start md:items-center gap-2  ">
              <span className="text-xl md:text-2xl font-medium text-slate-400 ">
                Application Development
              </span>

              <LinkCard
                link="/services/application-development"
                title="Cloud Migration & Modernization"
              />
              <LinkCard
                link="/services/application-development"
                title="Low Code/ No Code"
              />
              <LinkCard
                link="/services/application-development"
                title="Open Source Development"
              />
            </div>

            <div className="w-full flex flex-col justify-start md:items-center gap-2  ">
              <span className="text-xl md:text-2xl font-medium text-slate-400  w-full">
                Data & Insights
              </span>

              <LinkCard link="/services/data-insights" title="AI Analytics" />

              <LinkCard link="/services/data-insights" title="Dashboarding" />
              <LinkCard
                link="/services/data-insights"
                title="Data Management"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const LinkCard = ({ link, title }: { link: string; title: string }) => {
  return (
    <Link to={link} className="w-full flex justify-start gap-2 items-center">
      <span className="font-thin  w-full     hover:underline underline-offset-4 text-slate-300">
        {title}
      </span>
    </Link>
  );
};
