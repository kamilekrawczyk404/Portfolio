import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const COLORS = ["#2fff00", "#00ffff", "#fbff12"];
const shadowLengths = [15, 20, 15, 10];
// const starsScale = [0, 100];
export const AuroraEffect = () => {
  // const [scale, setScale] = useState(0);
  const color = useMotionValue(COLORS[0]);
  const shadowLength = useMotionValue(shadowLengths[0]);
  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   setScale(latest >= 0 ? latest * 0.15 : 0.1);
  // });

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`.1rem solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px ${shadowLength}px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
      ease: "easeInOut",
    });
    animate(shadowLength, shadowLengths, {
      duration: 5,
      ease: "easeInOut",
      repeatType: "mirror",
      repeat: Infinity,
    });
    // animate(starScale, starsScale, {
    //
    // })
  }, []);

  return (
    <>
      <motion.section
        className={
          "relative h-screen p-24 text-gray-200 overflow-hidden flex items-center justify-center"
        }
        style={{
          backgroundImage,
        }}
      >
        <div className={"absolute inset-0 z-0"}>
          <Canvas>
            <Stars radius={100} count={500} factor={10} fade speed={2} />
            <Stars radius={100} count={500} factor={100} fade speed={2} />
          </Canvas>
        </div>
        <motion.button
          style={{ border, boxShadow }}
          className={"px-4 py-2 rounded-full text-2xl"}
        >
          Click me!
        </motion.button>
      </motion.section>
      <div className={"h-screen"}></div>
    </>
  );
};
