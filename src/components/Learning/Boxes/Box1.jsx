import React from "react";
import { motion } from "framer-motion";

export const Box1 = () => {
  return (
    <div className={"p-8"}>
      <motion.div
        className={
          "w-32 aspect-square flex bg-amber-500 flex-col items-center justify-center"
        }
        animate={{
          x: "50rem",
          opacity: 1,
          rotate: 360,
          backgroundColor: "blue",
        }}
        initial={{
          opacity: 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
        whileHover={{
          borderRadius: 100,
        }}
      ></motion.div>
    </div>
  );
};

export default Box1;
