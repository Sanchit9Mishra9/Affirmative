/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MobileNavItems from "./MobileNavItems";
import { Search } from "lucide-react";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

function MobileMenu({
  clicked,
  setClicked,
}: {
  clicked: boolean;
  setClicked: any;
}) {
  useEffect(() => {
    if (clicked) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [clicked]);
  return (
    <AnimatePresence mode="wait">
      {clicked && (
        <motion.div
          initial={{ opacity: 0.5, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0.5, x: "100%" }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 z-[90] w-screen min-h-screen bg-white overflow-y-auto flex flex-col justify-start "
        >
          <div>
            <div className="w-full flex py-4  px-8 ">
              <Link to="/" onClick={() => setClicked(false)} className="">
                <img
                  // src="/affirmity-crop-logo.svg"
                  // alt=" affrmity-crop-logo.svg crop mobile"
                  src="/quadcorp.png"
                  alt="quadcorp.png mobile"
                  className="h-11 w-16 "
                />
              </Link>
            </div>
            <div className="w-full py-4 px-8 flex relative">
              <input
                type="text"
                placeholder="search here"
                className="outline-none rounded-full w-full py-3  px-4 text-black bg-slate-300  cursor-pointer focus:outline-slate-500"
              />
              <Search className="absolute top-1/2 right-12 transform -translate-y-1/2 text-slate-300 cursor-pointer" />
            </div>
            <MobileNavItems setClicked={setClicked} />
          </div>
          {/* News */}
          <div className="flex flex-col items-center justify-center   gap-4 w-full  py-10 ">
            <div className="flex gap-5 justify-center items-center w-full">
              <Facebook className="w-6 h-6 text-slate-500" />
              <Youtube className="w-6 h-6 text-slate-500" />
              <Linkedin className="w-6 h-6 text-slate-500" />
              <Twitter className="w-6 h-6 text-slate-500" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
