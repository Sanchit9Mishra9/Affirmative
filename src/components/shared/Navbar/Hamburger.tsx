import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Hamburger({
  clicked,
  setClicked,
}: {
  clicked: boolean;
  setClicked: any;
}) {
  const burgerControls = useAnimation();

  useEffect(() => {
    if (clicked) {
      burgerControls.start("tilt");
    } else {
      burgerControls.start("stil");
    }
  }, [clicked, burgerControls]);

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 500,
        damping: 20,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => setClicked(!clicked)}
      className="min-[996px]:hidden z-[999] flex flex-col gap-1 p-4 rounded-full w-14 h-14 justify-center items-center  cursor-pointer"
    >
      <motion.div
        initial={"stil"}
        animate={burgerControls}
        exit={"stil"}
        variants={{
          stil: {
            y: 0,
            rotate: 0,
          },

          tilt: {
            y: 8,
            rotate: 45,
          },
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-1 bg-[#002E62] rounded-lg"
      ></motion.div>
      <motion.div
        initial={"stil"}
        animate={burgerControls}
        exit={"stil"}
        variants={{
          stil: {
            opacity: 1,
          },

          tilt: {
            opacity: 0,
          },
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-1 bg-[#002E62]  rounded-lg"
      ></motion.div>
      <motion.div
        initial={"stil"}
        animate={burgerControls}
        exit={"stil"}
        variants={{
          stil: {
            y: 0,
            rotate: 0,
          },

          tilt: {
            y: -8,
            rotate: -45,
          },
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-1 bg-[#002E62]  rounded-lg"
      ></motion.div>
    </motion.div>
  );
}

export default Hamburger;
