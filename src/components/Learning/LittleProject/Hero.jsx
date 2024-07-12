import { useEffect, useRef } from "react";
import {
  animate,
  useMotionValue,
  motion,
  useTransform,
  useMotionTemplate,
  useScroll,
} from "framer-motion";

export const Hero = () => {
  // const mouseX = useMotionValue(0);
  // const mouseY = useMotionValue(0);
  //
  // useEffect(() => {
  //   const handleMouseMovement = (e) => {
  //     animate(mouseX, e.clientX);
  //     animate(mouseY, e.clientY);
  //   };
  //
  //   window.addEventListener("mousemove", handleMouseMovement);
  //
  //   return () => {
  //     removeEventListener("mousemove", handleMouseMovement);
  //   };
  // }, []);
  //
  // const centerMouseX = useTransform(mouseX, (newX) => {
  //   return newX - window.innerWidth / 2;
  // });
  // const centerMouseY = useTransform(mouseY, (newY) => {
  //   return newY - window.innerHeight / 2;
  // });
  // const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos === 1 ? "relative" : "fixed",
  );
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(30, 27, 75)", "rgb(10 10 10)"],
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{
        backgroundColor,
      }}
      className={"text-gray-200 relative mb-[8rem] h-screen py-24"}
    >
      {/*<motion.div*/}
      {/*  className={"absolute w-full h-full z-20"}*/}
      {/*  style={{*/}
      {/*    maskImage:*/}
      {/*      "radial-gradient(10rem 10rem, rgba(255,0,0,1), rgba(255,0,0,1)",*/}
      {/*    maskRepeat: "no-repeat",*/}
      {/*    WebkitMaskPosition,*/}
      {/*  }}*/}
      {/*></motion.div>*/}
      <motion.div
        style={{ opacity, scale, position, x: "-50%" }}
        className={
          "z-10 left-1/2 flex items-center justify-center flex-col gap-y-8 py-8"
        }
      >
        <div className={"z-10 flex flex-col gap-y-2 items-center"}>
          <p>Projects beta</p>
          <span className={"text-sm text-gray-500"}>
            By codesandbox, result by Frontend
          </span>
        </div>
        <h1 className={"text-5xl"}>Development reimagined.</h1>
        <div>
          <p className={"text-amber-300"}>Import Github Project</p>
        </div>
      </motion.div>
    </motion.section>
  );
};
