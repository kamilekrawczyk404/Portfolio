import React from "react";
import { motion } from "framer-motion";

export const Box4 = () => {
  return (
    <div className={"p-8"}>
      <motion.div
        className={
          "w-32 aspect-square flex bg-amber-500 flex-col items-center justify-center"
        }
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        animate={{
          x: [100, 200, 40],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 3,
        }}
        exit={{
          opacity: 0,
        }}
      ></motion.div>
    </div>
  );
};

export default Box4;
