import { motion } from "framer-motion";
import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

export const NavigationLink = ({ link, variants }) => {
  // const match = useMatch("/");
  // console.log(matchPath(match?.pattern, link.route));
  const resolved = useResolvedPath(link.route);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <motion.div
      variants={variants}
      whileHover={match ? {} : variants.hover}
      className={`${match ? "ml-[0.5rem]" : ""}`}
    >
      <NavLink
        className={`relative pointer inline-block w-fit whitespace-nowrap before:absolute before:bottom-[0] before:h-[0.25rem] before:w-0 before:bg-gray-950 before:transition-all before:rounded-md ${
          match ? "before:w-full" : "hover:before:w-full"
        }`}
        to={link.route}
      >
        {link.name}
      </NavLink>
    </motion.div>
  );
};
