import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { specularColor } from "three/examples/jsm/nodes/core/PropertyNode.js";

export const TitleAside = ({ title, className = "", isFirst = false }) => {
  const [onRender, setOnRender] = useState(true);
  const ref = useRef(null);
  const parentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // container: parentRef,
    offset: ["start end", "end start"],
  });
  // const top = useTransform(
  //   scrollYProgress,
  //   isFirst ? [0, 1] : [0, 1],
  //   isFirst ? ["0%", "50%"] : ["50%", "0%"],
  // );
  const scale = useTransform(
    scrollYProgress,
    isFirst ? [0.6, 0.75] : [0, 0.5, 0.75, 1],
    isFirst ? [1, 0.75] : [0.5, 1, 1, 0.5],
  );
  const opacity = useTransform(
    scrollYProgress,
    isFirst ? [0.6, 0.75] : [0, 0.5, 0.6, 1],
    isFirst ? [1, 0] : [0, 1, 1, 0],
  );

  const translateY = useTransform(
    scrollYProgress,
    isFirst ? [0.75, 0.8, 1] : [0, 0.25, 0.5, 1],
    isFirst ? ["-50%", "-100%", "-100%"] : ["0%", "150%", "150%", "-100%"],
  );

  const top = useTransform(
    scrollYProgress,
    isFirst ? [0.5, 1] : [0, 0.25, 1],
    isFirst ? ["50%", "25%"] : ["0%", "50%", "0%"],
  );

  useEffect(() => {
    setTimeout(() => {
      setOnRender(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      ref={parentRef}
      className={
        "self-stretch flex justify-center relative w-1/2 overflow-x-clip " +
        className
      }
    >
      <motion.div
        ref={ref}
        className={
          "sticky top-0 w-full h-[10rem] flex items-center justify-center flex-col whitespace-nowrap"
        }
        style={{
          top,
          translateY,
          scale,
          opacity,
        }}
      >
        <motion.span
          animate={{
            opacity: [0.2, 0.3, 0.2, 0.2, 0.45, 0.2],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.25,
            repeatDelay: 3,
            times: [0, 0.1, 0.15, 0.75, 0.95, 1],
          }}
          className={"absolute left-0 text-red-700 text-[10rem]"}
        >{`#${title.replaceAll(" ", "")}`}</motion.span>
        <h2 className={`z-10 text-red-600 text-8xl `}>{title}</h2>
      </motion.div>
    </motion.div>
  );
};
