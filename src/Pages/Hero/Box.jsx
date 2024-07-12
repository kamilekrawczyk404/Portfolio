import { motion } from "framer-motion";

export const Box = () => {
  return (
    <>
      <motion.div
        id={"leftWall"}
        className={
          "z-20 absolute top-1/2 w-[0.25rem] h-[7rem] left-1/2 -translate-x-1/2 bg-red-600"
        }
        initial={{ scaleY: 0, translateY: "-50%" }}
      ></motion.div>
      <motion.div
        id={"rightWall"}
        className={
          "z-20 absolute top-1/2 w-[0.25rem] h-[7rem] left-1/2 -translate-x-1/2 bg-red-600"
        }
        initial={{ scaleY: 0, translateY: "-50%" }}
      ></motion.div>
      <motion.div
        id={"topWall"}
        className={
          "z-20 absolute w-[20vw] h-[0.25rem] left-1/2 top-1/2 bg-red-600 origin-left"
        }
        style={{
          translateX: "-10vw",
          translateY: "-3.5rem",
        }}
        initial={{ scaleX: 0 }}
      ></motion.div>
      <motion.div
        id={"bottomWall"}
        className={
          "z-20 absolute w-[20vw] h-[0.25rem] left-1/2 top-1/2 bg-red-600 origin-right"
        }
        style={{
          translateX: "-10vw",
          translateY: "3.25rem",
        }}
        initial={{ scaleX: 0 }}
      ></motion.div>
    </>
  );
};
