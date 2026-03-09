import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AerospaceAndDefenceIndustriesData } from "../IndustriesData";
import { Collapse } from "react-collapse";
export default function IndustriesOverview({
  overview,
}: {
  overview: typeof AerospaceAndDefenceIndustriesData.overview;
}) {
  return (
    <div className="w-full  flex flex-col items-center mt-10">
      <div className="w-full min-h-fit flex flex-col gap-6 md:gap-12 pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  justify-center items-center  ">
        {/* top heading */}
        <div className="w-full md:w-[90%] flex justify-center items-center flex-col gap-4">
          <span className=" md:text-[1.5rem]  text-violet-500 text-center">
            {/* Being Resilient. That’s Live Enterprise. */}
            {overview.Phrase}
          </span>
          <span className="text-[1.1rem] md:text-[2.5rem] font-medium  text-center">
            {overview.heading}
          </span>
        </div>

        {/* middle content */}
        <ContentSection
          desc={overview.desc}
          readmoreText={overview.readmore}
          img={overview.image}
        />

        {/* Mobile */}
        <MobileContentSection
          desc={overview.desc}
          readmoreText={overview.readmore}
          img={overview.image}
        />
      </div>
    </div>
  );
}

const ContentSection = ({
  desc,
  readmoreText,
  img,
}: {
  desc: string;
  readmoreText: string;
  img: string;
}) => {
  const [readmore, setReadMore] = useState(false);

  return (
    <div className="hidden w-full h-full  md:flex flex-1 flex-col   gap-10    relative overflow-hidden ">
      <AnimatePresence mode="wait">
        {!readmore && (
          <motion.div
            variants={{
              initial: { x: "100%", opacity: 0.0 },
              animate: { x: "0%", opacity: 1 },
              exit: { x: "100%", opacity: 0.0 },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="md:w-[55%] h-[42vh]  absolute  right-0 flex flex-col gap-4 p-8  justify-between z-10 bg-black"
          >
            <p className=" md:text-[1.1rem] font-thin text-slate-300 ">
              {desc}
            </p>
            <button
              onClick={() => setReadMore(!readmore)}
              className="outline w-fit   md:py-3 md:px-6 p-2 hover:outline-none transition-all duration-300  "
            >
              Read More
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        variants={{
          rest: { width: "100%%" },
          animate: { width: "100%" },
        }}
        initial="rest"
        animate={readmore ? "animate" : "rest"}
        transition={{ duration: 0.5 }}
        className="h-[42vh]  relative"
      >
        <img
          src={img}
          alt={`${img} image`}
          className="w-full h-full object-cover object-center brightness-[.7]  absolute origin-top-left "
        />
      </motion.div>

      <AnimatePresence>
        {readmore && (
          <motion.div
            variants={{
              initial: { y: 100, opacity: 0.5 },
              animate: { y: 0, opacity: 1 },
              exit: { y: 100, opacity: 0 },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="w-full  flex flex-col gap-4 p-8  "
          >
            <p className="md:text-[1.2rem] font-thin text-slate-300">{desc}</p>
            <p className="md:text-[1.2rem] font-thin text-slate-300">
              {readmoreText}
            </p>
            <button
              onClick={() => setReadMore(!readmore)}
              className="outline w-fit   md:py-3 md:px-6 p-2 hover:outline-none transition-all duration-300  "
            >
              Read Less
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileContentSection = ({
  desc,
  readmoreText,
  img,
}: {
  desc: string;
  readmoreText: string;
  img: string;
}) => {
  const [readmore, setReadMore] = useState(false);

  return (
    <div className=" md:hidden w-full  flex flex-col gap-6 ">
      <img
        src={img}
        alt={`${img} image`}
        className="w-full h-full object-contain object-center "
      />
      <p className="font-thin text-slate-300">{desc}</p>
      {!readmore && (
        <button
          onClick={() => setReadMore(!readmore)}
          className="outline w-fit   md:py-3 md:px-6 p-2   "
        >
          Read More
        </button>
      )}

      <Collapse isOpened={readmore}>
        <p className="font-thin text-slate-300">{readmoreText}</p>
        <button
          onClick={() => setReadMore(!readmore)}
          className="outline w-fit   md:py-3 md:px-6 p-2  mt-4 "
        >
          Read Less
        </button>
      </Collapse>
    </div>
  );
};
