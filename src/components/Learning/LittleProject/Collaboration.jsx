import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Collaboration = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.5]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 0.9],
    ["0%", "55%", "60%", "80%"],
  );
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  return (
    <section className={"-mt-[30vh]"}>
      <div ref={sectionRef} className={"h-[300vh] w-full"}>
        <div className={"sticky top-[10vh]"}>
          <div className={"flex justify-center"}>
            <motion.div style={{ scale, x, opacity }} className={"origin-top"}>
              <img
                className={"w-[75vw] h-auto mx-auto rounded-md "}
                src={"public/image.jpg"}
                alt={"Some Image"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
