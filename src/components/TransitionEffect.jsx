import { motion } from "framer-motion";
import { CutText } from "./CutText.jsx";
export const TransitionEffect = ({ header }) => {
  return (
    <motion.div
      className={
        "z-[100] w-screen h-screen fixed top-0 bottom-0 right-full bg-red-600"
      }
      initial={{ width: "100%", x: "100%" }}
      animate={{
        width: "0%",
        x: "0%",
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <CutText text={header} />
    </motion.div>
  );
};
