import React from "react";
import { motion } from "framer-motion";

export const Box3 = () => {
  const boxVariants = {
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren", //use this instead of delay
        staggerChildren: 0.2, //apply stagger on the parent tag
      },
    },
    hidden: {
      x: "-100vw",
    },
  };

  const listVariant = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -10,
      opacity: 0,
    },
  };

  return (
    <div className={"p-8"}>
      <motion.div
        className={
          "w-32 aspect-square flex bg-amber-500 flex-col items-center justify-center gap-y-2"
        }
        variants={boxVariants}
        animate={"visible"}
        initial={"hidden"}
      >
        {[1, 2, 3].map((box) => (
          <motion.div
            variants={listVariant}
            className={"bg-white w-6 aspect-square"}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
