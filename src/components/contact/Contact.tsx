import { motion, useAnimation } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Quadcorp - Contact</title>
        <meta
          name="description"
          content="Contact Affirmity Corp for services, media queries, investor relations, general inquiries, website feedback, and partnerships."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[30vh] md:h-[50vh] relative flex justify-center items-center  ">
          <img
            src="/contact/contact-bg.webp"
            alt="contact background image"
            className="absolute inset-0 -z-10  w-full h-full object-cover brightness-75"
          />
          <Banner />
        </div>
        <ContactPurpose />
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   z-10">
      <div className="w-full  flex flex-col items-start  justify-start h-full">
        {/* navigation */}
        <div className="flex w-fit gap-3 md:mt-8">
          <div className="w-fit flex gap-2 justify-center items-center">
            <span className="text-xs md:text-sm  text-white">Contact</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
          </div>
        </div>

        {/* content */}

        <div className=" w-full flex flex-col  gap-6 md:gap-8 justify-end items-start  h-full  ">
          <Scroll to="requestsforcontacts" smooth={true} duration={500}>
            <p className="text-2xl md:text-5xl font-bold text-slate-200 hover:cursor-help">
              How can we assist you ?
            </p>
          </Scroll>
        </div>
      </div>
    </div>
  );
};

const ContactPurpose = () => {
  return (
    <div
      id="requestsforcontacts"
      className="w-full  flex justify-center items-center "
    >
      <div className="w-full h-full  flex flex-col  pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  gap-14 ">
        <div className="w-full flex justify-center items-center flex-col gap-4">
          <span className="text-3xl md:text-6xl font-semibold text-002E62 ">
            Define Your Mission
          </span>
          <p className="w-full md:w-[70%] text-center font-thin text-slate-600 text-xl md:text-3xl">
            Please select your area of interest below. A Quadcorp representative will contact you shortly
            after receiving your request.
          </p>
        </div>
        <ContactCardSection />
      </div>
    </div>
  );
};

const ContactCard = ({ title }: { title: string }) => {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({
      width: "25%",
    });
  };

  const handleLeave = () => {
    controls.start({
      width: "10%",
    });
  };

  const navigate = useNavigate();
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={() => navigate("/contact/request-for-contact")}
      className="w-full flex flex-col justify-end items-start gap-2 h-[150px] bg-[rgb(240,240,240)] p-6  cursor-pointer md:hover:brightness-150"
    >
      <span className="font-semibold text-slate-600">{title}</span>
      <motion.span
        initial={{ width: "10%" }}
        animate={controls}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="h-[4px] bg-primary  "
      ></motion.span>
    </div>
  );
};

const cardList = [
  "Procurment",
  "Media Queries",
  "Investor Relations",
  "General Inquiries",
  "Customer Service",
  "Partnerships",
];

const ContactCardSection = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
      {cardList.map((item, index) => (
        <ContactCard key={index} title={item} />
      ))}
    </div>
  );
};
