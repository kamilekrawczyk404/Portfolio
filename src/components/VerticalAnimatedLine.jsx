import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef } from "react";

export const VerticalAnimatedLine = forwardRef(
  ({ maxLength = 100, offset = [] }, ref) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: offset,
    });
    const height = useTransform(
      scrollYProgress,
      [0.05, 1],
      ["0%", `${maxLength}%`],
    );
    const opacity = useTransform(
      scrollYProgress,
      [0, 0.05, 1, 1.005],
      ["0%", "100%", "100%", "0%"],
    );

    return (
      <>
        <motion.div
          style={{ opacity }}
          className={
            "absolute left-[-0.55rem] top-0 bg-red-600 w-5 rounded-md aspect-square shadow-sm shadow-red-600"
          }
        />
        <motion.div
          style={{ height, opacity }}
          transition={{
            type: "spring",
            stiffness: 100,
          }}
          className={
            "absolute top-0 left-0 bg-red-600 w-[0.125rem] rounded-md shadow-sm shadow-red-600"
          }
        />
      </>
    );
  },
);
