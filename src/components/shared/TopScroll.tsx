import { motion, useScroll, useTransform } from "framer-motion";

export default function TopScroll() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ width: width }}
      className=" fixed w-screen h-[.5px] bg-gradient-to-r from-purple-500 via-primary to-orange-500 rounded-full z-[99999]"
    ></motion.div>
  );
}
