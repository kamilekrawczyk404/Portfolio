import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
// eslint-disable-next-line react/prop-types
export const AnimateText = ({ text }) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");

      timeout = setTimeout(async () => {
        await controls.start("hidden");
        controls.start("visible");
      }, 10000);
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isInView]);
  return (
    <>
      <div className={"h-screen"}></div>
      <div
        className={
          "h-screen flex items-center justify-center text-7xl font-semibold"
        }
      >
        <span className={"sr-only"}>{text}</span>
        <motion.span
          ref={ref}
          initial={"hidden"}
          animate={controls}
          transition={{ staggerChildren: 0.15 }}
          aria-hidden
        >
          {textArray.map((line) => (
            <span className={"block"}>
              {line.split(" ").map((word) => (
                <span className={"inline-block"}>
                  {word.split("").map((char) => (
                    <motion.span
                      className={"inline-block"}
                      variants={defaultAnimation}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className={"inline-block"}>&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </div>
    </>
  );
};
