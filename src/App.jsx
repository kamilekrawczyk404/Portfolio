import React, { useState } from "react";
import "./App.css";
import { Hero } from "./Pages/Hero/Hero.jsx";
import { AboutMe } from "./Pages/AboutMe/AboutMe.jsx";

function App() {
  const [boxes, setBoxes] = useState([1, 2, 3, 4]);
  const removeBox = (index) => {
    setBoxes((prev) => prev.toSpliced(index, 1));
  };
  return (
    <div></div>
    // {/*<main className={"bg-gray-950"}>*/}
    //   {/*<Box1 />*/}
    //   {/*<Box2 />*/}
    //   {/*<Box3 />*/}
    //   {/*<Box4 />*/}
    //   {/*<AnimatePresence>*/}
    //   {/*  {boxes.map((box, index) => (*/}
    //   {/*    <motion.button*/}
    //   {/*      className={"bg-gray-200 rounded-md p-20"}*/}
    //   {/*      key={index}*/}
    //   {/*      onClick={() => removeBox(index)}*/}
    //   {/*      transition={{*/}
    //   {/*        duration: 0.5,*/}
    //   {/*      }}*/}
    //   {/*      exit={{ opacity: 0 }}*/}
    //   {/*    >*/}
    //   {/*      {box} #{index + 1}*/}
    //   {/*    </motion.button>*/}
    //   {/*  ))}*/}
    //   {/*</AnimatePresence>*/}
    //   {/*<Scroll />*/}
    //   {/*<Example1 />*/}
    //   {/*<AnimateText text={["animated text", "some other text"]} />*/}
    //   {/*<AuroraEffect />*/}
    //   {/*<div className={"h-screen"}></div>*/}
    //   {/*<ResizeScroll />*/}
    //   {/*<div className={"h-screen"}></div>*/}
    //   {/*<Hero />*/}
    //   {/*<div className={"overflow-x-clip relative z-10 w-full"}>*/}
    //   {/*  <Collaboration />*/}
    //   {/*  <OtherImage />*/}
    //   {/*</div>*/}
    //   {/*<Hero />*/}
    //   {/*<AboutMe />*/}
    // {/*</main>*/}
  );
}

export default App;
