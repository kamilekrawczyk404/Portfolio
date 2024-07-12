import React, { useEffect, useState } from "react";
import { TransitionEffect } from "../../components/TransitionEffect.jsx";
import { useQuery } from "react-query";
import { TwoSectionsContainer } from "../../components/TwoSectionsContainer.jsx";
import { TitleAside } from "../../components/TitleAside.jsx";
import Icons from "../../components/Icons.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GitInfoContainer = ({ children, title }) => {
  const variantsTop = {
    animate: {
      top: "50%",
      translateY: "-50%",
      translateX: "-50%",
    },
    initial: {
      top: "-100%",
      translateX: "-50%",
    },
  };
  const variantsBottom = {
    animate: {
      top: "200%",
    },
    initial: {
      top: "50%",
      translateY: "-50%",
    },
  };

  return (
    <motion.div
      initial={"initial"}
      whileHover={"animate"}
      className={
        "relative flex items-center gap-2 bg-red-600 rounded-sm text-gray-950 px-2 py-1 overflow-hidden h-fit w-fit hover:cursor-pointer"
      }
    >
      <div className={"invisible flex gap-2"}>{children}</div>
      <motion.div
        variants={variantsTop}
        className={"absolute left-1/2 whitespace-nowrap"}
      >
        {title}
      </motion.div>
      <motion.div
        className={"absolute flex gap-2 items-center"}
        variants={variantsBottom}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const formatDate = (date) => {
  return date.substring(0, date.indexOf("T")).replaceAll("-", ".");
};

const formatReadMe = (readMeContent) => {
  const description = readMeContent.substring(
    readMeContent.indexOf("General Info"),
    // readMeContent.indexOf("#", readMeContent.indexOf("General Info")),
  );

  console.log(description);
  return <div>{description}</div>;
};

const getRepositories = () => {
  const { isLoading, data } = useQuery("repos", {
    queryFn: async () => {
      const res = await fetch(
        "https://api.github.com/users/kamilekrawczyk404/repos",
      );
      return res.json();
    },
  });

  return isLoading ? [] : data;
};

const getRepositoryReadMe = ({ repoName, branch }) => {
  const { isLoading, data } = useQuery("readMe", {
    queryFn: async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/kamilekrawczyk404/${repoName}/${branch}/README.md`,
      );

      return res.text();
    },
  });

  return isLoading ? "" : data.toString();
};

const RecentProjects = () => {
  const repositories = getRepositories();
  const readMe = getRepositoryReadMe({
    repoName: "flashcards",
    branch: "main",
  });

  return (
    <div className={`${!repositories && "h-screen"} bg-gray-950 h-fit w-full`}>
      <TransitionEffect header={"Recent projects"} />
      {repositories &&
        repositories.map((repository, index) => (
          <TwoSectionsContainer className={"text-gray-100"} key={index}>
            <section className={"w-1/2 relative"}>
              <div
                className={"border-[0.125rem] border-red-600 rounded-md p-4"}
              >
                <div
                  className={
                    "border-b-[0.125rem] relative border-red-600 flex items-center pb-4 gap-4"
                  }
                >
                  <Link to={repository.url} className={""}>
                    <Icons.Github className={"h-8"} />
                  </Link>
                  <GitInfoContainer title={"Created At"}>
                    <Icons.Calendar />
                    {formatDate(repository.created_at)}
                  </GitInfoContainer>
                  <GitInfoContainer title={"Last Commit"}>
                    <Icons.Commit />
                    {formatDate(repository.updated_at)}
                  </GitInfoContainer>
                  <GitInfoContainer title={"Branch"}>
                    <Icons.Branch />
                    {repository.default_branch}
                  </GitInfoContainer>
                </div>
                <div>
                  Main Language{" "}
                  <Icons.JavaScript className={"text-yellow-500 text-4xl"} />
                </div>
              </div>
              {readMe && formatReadMe(readMe)}
            </section>
            <TitleAside title={repository.name} />
          </TwoSectionsContainer>
        ))}
    </div>
  );
};

export default RecentProjects;
