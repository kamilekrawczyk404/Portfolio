import { motion } from "framer-motion";

export const AnimatedDottedList = ({
  elements = [],
  className = "",
  inView = true,
}) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.75 },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className={"flex flex-col gap-y-4 " + className}
      variants={variants}
      initial={"initial"}
      whileInView={inView ? "animate" : {}}
      animate={!inView ? "animate" : {}}
      transition={{
        staggerChildren: 0.25,
        delayChildren: 1,
      }}
    >
      {elements.map((element, index) => (
        <motion.div className={"relative"} variants={item} key={index}>
          <motion.span
            initial={{
              borderRadius: "0.25rem",
              boxShadow: "1px 1px .5rem rgb(220 38 38)",
            }}
            animate={{
              borderRadius: "50%",
              boxShadow: "1px 1px 1rem rgb(220 38 38)",
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
              delay: index + 0.15,
            }}
            className={"absolute top-0 left-0 w-3 aspect-square bg-red-600"}
          />
          <span className={"mr-8 indent-6 inline-block"}>{element}</span>
        </motion.div>
      ))}
    </motion.section>
  );
};
