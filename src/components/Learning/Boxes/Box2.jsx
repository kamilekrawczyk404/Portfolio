import React from "react";
import { motion } from "framer-motion";

export const Box2 = () => {
  return (
    <div className={"p-8"}>
      <motion.div
        className={
          "w-32 aspect-square flex bg-amber-500 flex-col items-center justify-center"
        }
        drag
        dragConstraints={{
          left: 10,
          top: 5,
          right: 10,
          bottom: 5,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        {" "}
      </motion.div>
    </div>
  );
};

export default Box2;
