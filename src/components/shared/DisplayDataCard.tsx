import { IDisplayDataCard } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
// import Marquee from "react-fast-marquee";
import { useLocation } from "react-router-dom";

const DisplayDataCard = ({
  item,
  index,
}: {
  item: IDisplayDataCard;
  index: number;
}) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Get the hash from the URL (e.g., #section1)
    const hash = location.hash;

    // Scroll to the section if the hash is present
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to the top if no hash is present (for the Industries page without a specific section)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        x: index % 2 === 0 ? "-50%" : "50%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: "0%",
      }}
      transition={{ duration: 0.7, ease: [0, 0.55, 0.45, 1] }}
      id={item.id}
      className={`w-full flex flex-col  gap-10 ${
        open ? "md:bg-[#1d1d1d]" : ""
      }`}
    >
      <span className="text-[10vw] md:text-[6vw] font-bold  text-center ">
        {item.title}
      </span>
      <div className="w-full flex max-md:flex-col gap-10  h-full">
        <div className="w-full md:w-1/2  min-[996px]:h-[50vh] h-[40vh]">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full   object-fill  "
          />
        </div>
        <div className="w-full md:w-1/2 h-fit flex flex-col md:p-10 gap-8 justify-start">
          <span className="text-2xl font-bold">What to know ?</span>

          <p className="text-ellipsis">{item.desc}</p>

          {!open && (
            <div
              onClick={() => setOpen(true)}
              className="flex gap-4 justify-start items-center w-fit cursor-pointer"
            >
              <span>Read More</span>
              <button className="bg-primary">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence mode="sync">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full px-6 mb-6   flex flex-col gap-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className=""
            >
              {item.readMore}
            </motion.p>
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="flex gap-4 justify-start items-center w-fit cursor-pointer"
              >
                <span>Read Less</span>
                <button className="bg-primary">
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DisplayDataCard;
