import { AnimatePresence, useAnimate } from "framer-motion";
import { motion } from "framer-motion";
import { Grid } from "./Grid.jsx";
import { Box } from "./Box.jsx";
import { Nav } from "../../components/Nav/Nav.jsx";
import { RadialGradient } from "./RadialGradient.jsx";
import { TransitionEffect } from "../../components/TransitionEffect.jsx";
import { CutText } from "../../components/CutText.jsx";
import { Seo } from "../../components/Seo.jsx";

export const Hero = () => {
  const [scope, animate] = useAnimate();
  const animation = async () => {
    await animate(
      "#rightWall, #leftWall",
      {
        scaleY: 1,
      },
      { duration: 0.75 },
    );
    animate("#rightWall", {
      x: "10vw",
    });
    animate("#leftWall", {
      x: "-10vw",
    });

    animate(
      "#topWall, #bottomWall",
      {
        scaleX: 1,
      },
      { duration: 0.75 },
    );

    await animate(
      "#topWall, #bottomWall, #rightWall, #leftWall",
      {
        opacity: 0,
      },
      { delay: 1.5 },
    );

    await animate("#description", {
      y: 0,
      opacity: 1,
      position: "relative",
    });
  };

  return (
    <div className={"relative flex h-screen bg-gray-950 overflow-hidden"}>
      <Seo
        title={"Kamil's portfolio"}
        description={"Lorem"}
        type={"article"}
        name={"Kamil"}
      />
      <motion.div
        ref={scope}
        id={"welcomeContainer"}
        className={
          "relative z-50 h-full p-16 w-1/2 bg-gray-950 text-red-600 flex flex-col items-center justify-center"
        }
        whileInView={animation}
      >
        <Nav hasMediaLinks={true} />
        <Box />

        <AnimatePresence mode={"popLayout"}>
          <CutText text={"Hello"} delay={750} id={"text"} fadedOut={true} />
          <motion.span
            id="description"
            className={"inline-block text-gray-300 text-6xl"}
            initial={{ opacity: 0, y: 10, position: "absolute" }}
          >
            <span className={"block"}>
              I'm <span className={"text-red-600"}>Kamil</span>
            </span>{" "}
            and I'm a web developer
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <Grid />
      <RadialGradient />
    </div>
  );
};
