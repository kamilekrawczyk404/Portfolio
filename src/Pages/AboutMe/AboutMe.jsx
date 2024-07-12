import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { TransitionEffect } from "../../components/TransitionEffect.jsx";
import { Seo } from "../../components/Seo.jsx";
import { AnimatedDottedList } from "../../components/Lists/AnimatedDottedList.jsx";
import { Nav } from "../../components/Nav/Nav.jsx";
import { TitleAside } from "../../components/TitleAside.jsx";
import { Experience } from "./Experience.jsx";
import { TwoSectionsContainer } from "../../components/TwoSectionsContainer.jsx";
import { Technologies } from "./Technologies.jsx";
export const AboutMe = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    container: ref.current,
    offset: ["start", "end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const [isListVisible, setIsListVisible] = useState(false);

  const variants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div className={"relative bg-gray-950"}>
      <Seo description={"Lorem"} title={"About Me - Kamil's portfolio"} />
      <Nav />
      <TransitionEffect header={"About Me"} />

      <div className={"relative flex flex-col"}>
        <TwoSectionsContainer clasName={"h-screen"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
            }}
            className={"h-full w-1/2 relative flex items-center justify-center"}
          >
            <motion.div
              className={
                "absolute h-full top-1/2 -translate-y-1/2 flex items-center justify-center"
              }
              animate={isListVisible ? { opacity: 1 } : { opacity: 0 }}
            >
              <AnimatedDottedList
                inView={false}
                className={"w-2/3 text-xl"}
                elements={[
                  `I'm ${
                    new Date().getFullYear() - 2003
                  } years old and currently I'm studying at Silesian University of Technology (I'm major in Computer Science)`,
                  "I'm not afraid of trying new things, especially those that will put something valuable in my life",
                  "My benchmark is hard and conscientious work that brings fruitful results in a short time",
                  "I can quickly adapt to a new place and enjoy every task assigned to me.",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 1,
              }}
              whileHover={{
                opacity: 0.1,
                transition: {
                  duration: 0.25,
                  ease: "easeIn",
                },
              }}
              onHoverStart={() => setIsListVisible(true)}
              onHoverEnd={() => setIsListVisible(false)}
              className={
                "relative h-3/4 w-fit flex items-center justify-center mx-auto"
              }
            >
              <motion.img
                src={"/Me.jpg"}
                alt={"My look"}
                className={"rounded-md h-full"}
              />

              <div className={"absolute top-0 -left-[4rem] -rotate-45"}>
                <motion.div
                  animate={{
                    scaleX: [1, 0.95, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  }}
                  className={
                    "absolute -left-[1rem] top-[4rem] bg-red-600 w-[7.5rem] h-[0.5rem] z-10 rounded-md -rotate-45"
                  }
                />
                <motion.div
                  animate={{
                    scaleX: [1, 0.95, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    repeatDelay: 0.5,
                  }}
                  className={
                    "absolute -left-[2rem] top-[6rem] bg-red-600 w-[10rem] h-[0.5rem] z-10 rounded-md -rotate-45"
                  }
                />
              </div>
            </motion.div>
          </motion.div>

          <TitleAside title={"My Aspects"} isFirst={true} />
        </TwoSectionsContainer>

        <TwoSectionsContainer>
          <Experience />
          <TitleAside title={"Experience"} />
        </TwoSectionsContainer>

        <TwoSectionsContainer>
          <Technologies />
          <TitleAside title={"Technologies"} />
        </TwoSectionsContainer>
      </div>
    </div>
  );
};

export const RevealingHeader = ({ text }) => {
  const textArray = Array.isArray(text) ? text : [text];

  const variants = {
    whileInView: {
      color: "red",
      staggerChildren: 0.25,
    },
  };
  const item = {
    initial: {
      color: "black",
      y: 10,
    },
    whileInView: {
      color: "red",
      y: 0,
    },
  };

  return (
    <motion.h2
      variants={variants}
      whileInView={"whileInView"}
      className={"text-5xl"}
    >
      {textArray.map((line, index) => (
        <span key={index} className={"block"}>
          {line.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className={"inline-block"}>
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  variants={item}
                  // initial={"initial"}
                  // whileInView={"animate"}
                  key={letterIndex}
                  viewport={{
                    amount: 1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <span className={"inline-block"}>&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
};
