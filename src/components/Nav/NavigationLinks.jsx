import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationLink } from "./NavigationLink.jsx";
export const NavigationLinks = ({ isOpen }) => {
  const [currentVariant, setCurrentVariant] = useState("exit");

  const links = [
    { name: "Home", route: "/" },
    { name: "About me", route: "/aboutMe" },
    { name: "Recent projects", route: "/recentProjects" },
    { name: "Contact", route: "/contact" },
  ];

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        delay: 2,
      },
    },
  };

  const item = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
    hover: {
      x: "1rem",
      scale: 1.05,
    },
  };

  useEffect(() => {}, []);

  return (
    <motion.div
      className={
        "absolute left-16 top-1/2 -translate-y-1/2 flex flex-col gap-y-8 text-gray-950 text-5xl"
      }
      variants={variants}
      initial={"hidden"}
      animate={"visible"}
    >
      {links.map((link, index) => (
        <NavigationLink link={link} key={index} variants={item} />
      ))}
    </motion.div>
  );
};
