import { motion, useAnimation } from "framer-motion";
import { Search } from "lucide-react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function RightSideOptions() {
  const { pathname } = useLocation();
  const searchAnimation = useAnimation();
  const inputRef = useRef<HTMLInputElement>(null);

  const startSearchAnimation = () => {
    searchAnimation.start("open");
    inputRef.current?.focus();
  };

  const stopSearchAnimation = () => {
    searchAnimation.start("closed");
  };

  return (
    <div className=" gap-6 items-center z-10 hidden min-[996px]:flex">
      <div className="flex w-fit  relative justify-end cursor-pointer">
        <motion.input
          ref={inputRef}
          onBlur={stopSearchAnimation}
          initial={"closed"}
          animate={searchAnimation}
          variants={{
            open: {
              width: "100%",
              opacity: 1,
            },
            closed: {
              width: "0%",
              opacity: 0,
            },
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          type="text"
          placeholder="search here"
          className="outline-none border  rounded-full w-full py-2 px-4 text-slate-300 bg-[#161616]/90 text-sm cursor-pointer"
        />
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1, type: "spring", stiffness: 200 }}
        >
          <Search
            onMouseEnter={startSearchAnimation}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-slate-800 cursor-pointer"
          />
        </motion.div>
      </div>
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 200,
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 200,
          },
        }}
        className={`${pathname.includes("careers") ? "underline-offset-8 underline" : ""
          }`}
      >
        <Link to="/careers">Careers</Link>
      </motion.span>
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 200,
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 200,
          },
        }}
        className={`${pathname.includes("contact") ? "underline-offset-8 underline" : ""
          }`}
      >
        <Link to="/contact">Contact</Link>
      </motion.span>
    </div>
  );
}

export default RightSideOptions;
