/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { navLinkItems } from "./navData";

function LeftSideOptions({
  open,
  setOpen,
  setCurrentSublink,
}: {
  open: boolean;
  setOpen: any;
  setCurrentSublink: any;
  inHover: boolean;
  setInHover: any;
}) {
  const { pathname } = useLocation();

  const innerDivRef = useRef<HTMLDivElement>(null);
  const outterDivRef = useRef<HTMLDivElement>(null);

  const logoAnimationController = useAnimation();

  // const handleLogoHover = () => {
  //   logoAnimationController.start("hover");
  // };

  const handleLogoLeave = () => {
    logoAnimationController.start("rest");
  };

  useEffect(() => {
    const checkIfOutside = (e: MouseEvent) => {
      if (innerDivRef.current && outterDivRef.current) {
        const innerRect = innerDivRef.current.getBoundingClientRect();
        const outerRect = outterDivRef.current.getBoundingClientRect();

        if (
          e.clientX > outerRect.left &&
          e.clientX < outerRect.right &&
          e.clientY > outerRect.top &&
          e.clientY < outerRect.bottom
        ) {
          if (
            e.clientX < innerRect.left ||
            e.clientX > innerRect.right ||
            e.clientY < innerRect.top
          ) {
            setOpen(false);
          }
        }
      }
    };

    const removeOnScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    document.addEventListener("scroll", removeOnScroll);

    document.addEventListener("mousemove", checkIfOutside);

    return () => {
      document.removeEventListener("mousemove", checkIfOutside);
      document.removeEventListener("scroll", removeOnScroll);
    };
  }, []);

  return (
    <div ref={outterDivRef} className="flex  gap-10  h-full    items-end  ">
      <div className="flex justify-center items-center py-4 z-40">
        <Link to="/">
          <motion.div
            onMouseLeave={handleLogoLeave}
            className=" md:flex hidden h-[50px] w-[200px]  relative justify-center items-center  overflow-hidden "
          >
            <motion.img
              animate={logoAnimationController}
              initial="rest"
              exit="rest"
              variants={{
                rest: { opacity: 1, x: "0%" },
                hover: {
                  x: "16%",
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.65, 0, 0.35, 1],
                    delay: 0.2,
                    type: "spring",
                  },
                },
              }}
              transition={{
                duration: 0.4,
                ease: [0.65, 0, 0.35, 1],
                type: "spring",
              }}
              // src="/ffrmity.svg"
              // alt="ffrmity.svg"
              src="/quadcorp.png"
              alt="quadcorp.png"
              className="w-[150px] h-12 absolute top-[1px] "
            />
            {/* <motion.img
              onMouseEnter={handleLogoHover}
              animate={logoAnimationController}
              initial={{
                scale: 0,
                opacity: 0.5,
              }}
              whileInView={{
                x: 0,
                scale: 1.5,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 0.05,
                },
              }}
              exit="rest"
              variants={{
                rest: {
                  x: 0,
                  scale: 1.5,
                  opacity: 1,
                },
                hover: { x: -60, scale: 1 },
              }}
              transition={{
                duration: 0.4,
                ease: [0.65, 0, 0.35, 1],
                type: "spring",
              }}
              // src="/affirmity-crop-logo.svg"
              // alt=" affrmity-crop-logo.svg"
              src="/quadcorp.png"
              alt="quadcorp.png"
              className="h-8 w-8 absolute "
            /> */}
          </motion.div>
          <img
            // src="/affirmity-crop-logo.svg"
            // alt=" affrmity-crop-logo.svg crop"
            src="/quadcorp.png"
            alt="quadcorp.png"
            className="h-8 w-8 md:hidden block z-10"
          />
        </Link>
      </div>
      <div
        ref={innerDivRef}
        className="hidden min-[996px]:flex justify-between items-center gap-8   px-10 h-[70px]"
      >
        {navLinkItems.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="h-full flex justify-center items-center w-fit z-40 "
            >
              <motion.span
                onMouseEnter={() => {
                  if (item.subLinks) {
                    if (open) {
                      setOpen(false);
                      setTimeout(() => {
                        setOpen(true);

                        setCurrentSublink(item.name);
                      }, 200);
                    } else {
                      setOpen(true);
                      setCurrentSublink(item.name);
                    }
                  } else {
                    setOpen(false);
                  }

                  //   setCurrentSublink(item.subLinks);
                }}
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
                className={` w-fit
                transition-all duration-300 ease-in-out cursor-pointer font-medium
                ${pathname.includes(item.name.toLowerCase())
                    ? "underline-offset-8 underline  "
                    : ""
                  }
                `}
              >
                {item.name === "Company" ? (
                  <Link to="/company">{item.name}</Link>
                ) : (
                  item.name
                )}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default LeftSideOptions;
