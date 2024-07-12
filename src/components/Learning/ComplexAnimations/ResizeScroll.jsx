import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ResizeScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.4 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={"h-screen flex items-center justify-center relative"}
    >
      <div className={"flex flex-col p-4 rounded-md bg-gray-200 gap-y-4 w-1/2"}>
        <h1 className={"text-3xl font-bold block"}>Some header here</h1>
        <p>This text is generated automatically using chat gpt</p>
      </div>
    </motion.section>
  );
};
