import React, { useEffect, useState } from "react";
import { TransitionEffect } from "../../components/TransitionEffect.jsx";
import { useQuery } from "react-query";
import { TwoSectionsContainer } from "../../components/TwoSectionsContainer.jsx";
import { TitleAside } from "../../components/TitleAside.jsx";
import Icons from "../../components/Icons.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GitHubProperties = ({ aspects }) => {
  const [containersStates, setContainersStates] = useState(
    Array.from(Array(Object.keys(aspects).length)).fill(false),
  );
  const [currentAnimatingIndex, setCurrentAnimatingIndex] = useState(0);

  const variantsTop = {
    animate: {
      top: "50%",
    },
    initial: {
      top: "-100%",
    },
  };

  const variantsBottom = {
    animate: {
      top: "200%",
    },
    initial: {
      top: "50%",
    },
  };

  useEffect(() => {
    const TIME = 4000;

    setContainersStates(
      containersStates.toSpliced(currentAnimatingIndex, 1, true),
    );

    const timeout = setTimeout(() => {
      setContainersStates(
        containersStates.toSpliced(currentAnimatingIndex, 1, false),
      );
      setCurrentAnimatingIndex((prev) =>
        prev + 1 < containersStates.length ? prev + 1 : 0,
      );
    }, TIME);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentAnimatingIndex]);

  return Object.entries(aspects).map(([key, aspect], index) => (
    <motion.div
      onHoverStart={() =>
        setContainersStates(containersStates.toSpliced(index, 1, true))
      }
      onHoverEnd={() =>
        setContainersStates(containersStates.toSpliced(index, 1, false))
      }
      key={key}
      className={
        "relative flex flex-col items-center gap-2 bg-red-600 rounded-sm text-gray-950 px-2 py-1 overflow-hidden h-8 w-fit hover:cursor-pointer"
      }
      animate={containersStates[index] ? { scale: 1.025 } : {}}
    >
      <div className={"invisible h-0"}>
        {key[0].toUpperCase() +
          Array.from(key.slice(1))
            .map((character) =>
              character === character.toUpperCase()
                ? " " + character.toUpperCase()
                : character,
            )
            .join("")}
      </div>
      <motion.div
        variants={variantsTop}
        initial={"initial"}
        animate={containersStates[index] ? "animate" : ""}
        // transition={{
        //   duration: 0.25,
        //   repeatType: "mirror",
        //   repeat: Infinity,
        //   repeatDelay: 1,
        // }}
        className={
          "absolute whitespace-nowrap -top-full left-1/2 !-translate-x-1/2 !-translate-y-1/2"
        }
      >
        {aspect}
      </motion.div>
      <motion.div
        variants={variantsBottom}
        animate={containersStates[index] ? "animate" : ""}
        className={
          "absolute whitespace-nowrap top-1/2  left-1/2 !-translate-x-1/2 -translate-y-1/2"
        }
      >
        {key[0].toUpperCase() +
          Array.from(key.slice(1))
            .map((character) =>
              character === character.toUpperCase()
                ? " " + character.toUpperCase()
                : character,
            )
            .join("")}
      </motion.div>
    </motion.div>
  ));
};

const formatDate = (preformatted) => {
  const date = preformatted
    .substring(0, preformatted.indexOf("T"))
    .replaceAll("-", ".");

  return (
    date.slice(date.lastIndexOf(".") + 1) +
    date.slice(date.indexOf("."), date.lastIndexOf(".") + 1) +
    date.slice(0, date.indexOf("."))
  );
};

const formatReadMe = (readMeContent) => {
  const description = readMeContent.substring(
    readMeContent.indexOf("### General") + 16,
    readMeContent.indexOf("### Technologies"),
    // readMeContent.indexOf("#", readMeContent.indexOf("General Info")),
  );

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
  console.log(repositories);
  const readMe = getRepositoryReadMe({
    repoName: "flashcards",
    branch: "main",
  });

  return (
    <div className={`${!repositories && "h-screen"} bg-gray-950 h-fit w-full`}>
      <TransitionEffect header={"Recent projects"} />
      {repositories &&
        repositories.map((repository, index) => (
          <TwoSectionsContainer
            className={"text-gray-100 "}
            key={index}
            index={index}
          >
            <section className={"w-1/2 relative"}>
              <div
                className={"border-[0.125rem] border-red-600 rounded-md p-4"}
              >
                <div
                  className={
                    "border-b-[0.125rem] relative border-red-600 flex items-center pb-4 gap-4 relative"
                  }
                >
                  <Link to={repository.html_url}>
                    <Icons.Github className={"h-8"} />
                  </Link>
                  {repository.language.toLowerCase() === "c++" && (
                    <Icons.Cpp className={"w-10 h-10"} />
                  )}
                  {repository.language.toLowerCase() === "javascript" && (
                    <Icons.JavaScript className={"text-yellow-500 text-4xl"} />
                  )}
                  <GitHubProperties
                    aspects={{
                      createdAt: formatDate(repository.created_at),
                      updatedAt: formatDate(repository.updated_at),
                      defaultBranch: repository.default_branch,
                    }}
                  />
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
