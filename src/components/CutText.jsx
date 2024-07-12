import { motion, useAnimate } from "framer-motion";

export const CutText = ({ text, delay = 0, fadedOut = false, ...props }) => {
  const [scope, animate] = useAnimate();
  const animateText = () => {
    const animation = async () => {
      await animate(
        "#top, #bottom",
        {
          opacity: 1,
          left: "50%",
        },
        { duration: 0.75 },
      );
      await animate(
        "#top, #bottom",
        fadedOut
          ? {
              display: "none",
              opacity: 0,
              y: -10,
            }
          : { display: "none", opacity: 0 },
        { delay: 0.5 },
      );
    };

    if (delay) {
      setTimeout(async () => {
        await animation();
      }, delay);
    } else {
      animation();
    }
  };

  return (
    <motion.div
      animate={{
        display: "none",
      }}
      transition={{ delay: 1.25 }}
      ref={scope}
      whileInView={animateText}
      {...props}
      className={"absolute top-0 left-0 w-full h-full"}
    >
      <motion.div
        style={{
          clipPath: "inset(50% -1% -1% -1%)",
        }}
        className={
          "absolute left-2/3 overflow-hidden top-1/2 select-none text-7xl"
        }
        id={"top"}
        initial={{ opacity: 0, translateY: "-50%", translateX: "-50%" }}
      >
        {text}
      </motion.div>

      <motion.div
        style={{
          clipPath: "inset(-1% -1% 50% -1%)",
        }}
        className={
          "absolute left-1/3 overflow-hidden top-1/2 select-none text-7xl"
        }
        id={"bottom"}
        initial={{ opacity: 0, translateY: "-50%", translateX: "-50%" }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};
