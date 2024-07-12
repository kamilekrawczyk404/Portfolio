import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export const RadialGradient = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, rgba(0, 0, 0, 0) -25%, rgba(3, 7, 18, 0.8))`;

  const centerMouseX = useTransform(mouseX, (newX) => {
    return newX - window.innerWidth / 2;
  });
  const centerMouseY = useTransform(mouseY, (newY) => {
    return newY - window.innerHeight / 2;
  });
  const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={"z-0 w-full h-full absolute top-0 left-0 bg-red-800"}
        style={{
          WebkitMaskPosition,
          maskImage: `radial-gradient(12rem 12rem, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25), transparent)`,
          maskRepeat: "no-repeat",
        }}
      ></motion.div>

      <motion.div
        style={{
          background,
        }}
        className={"absolute top-0 left-0 w-full h-full"}
      ></motion.div>
    </>
  );
};
