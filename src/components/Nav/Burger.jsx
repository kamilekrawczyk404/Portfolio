import { motion } from "framer-motion";

export const Burger = ({ toggleMenu, variants, isOpen }) => {
  const burgerVariants = {
    top: {
      rotate: -50,
      scaleX: "125%",
      translateY: "0.75rem",
      backgroundColor: "rgb(3 7 18)",
    },
    bottom: {
      rotate: "50deg",
      scaleX: "125%",
      translateY: "-0.75rem",
      backgroundColor: "rgb(3 7 18)",
    },
  };
  return (
    <motion.button
      variants={variants}
      whileHover={"hover"}
      whileTap={"tap"}
      initial={"hidden"}
      animate={"visible"}
      className={
        "fixed top-16 left-16 flex flex-col gap-y-2 w-8 h-8 items-center justify-center"
      }
      onClick={toggleMenu}
    >
      <motion.span
        id={"top"}
        className={"h-[0.25rem] rounded-md inline-block w-full"}
        variants={variants}
        animate={!isOpen ? "visible" : burgerVariants.top}
        style={{
          scaleX: "100%",
          backgroundColor: "rgb(220, 38, 38)",
        }}
      />
      <motion.span
        id={"middle"}
        className={"bg-red-600 h-[0.25rem] rounded-md inline-block w-full"}
        variants={variants}
        animate={!isOpen ? "visible" : { opacity: 0 }}
        style={{
          scaleX: "100%",
        }}
      />
      <motion.span
        id={"bottom"}
        className={"h-[0.25rem] rounded-md inline-block w-full"}
        variants={variants}
        animate={!isOpen ? "visible" : burgerVariants.bottom}
        style={{
          scaleX: "100%",
          backgroundColor: "rgb(220, 38, 38)",
        }}
      />
    </motion.button>
  );
};
