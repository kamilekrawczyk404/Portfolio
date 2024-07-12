import { forwardRef } from "react";
import { motion } from "framer-motion";

export const PulsingContainer = forwardRef(
  ({ children, className = "", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={
          "relative border-[.125rem] border-red-600 shadow-lg shadow-red-600 " +
          className
        }
        initial={{
          boxShadow: "1px 1px .5rem rgb(220 38 38)",
        }}
        animate={{
          boxShadow: "1px 1px 2rem rgb(220 38 38)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.5,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
