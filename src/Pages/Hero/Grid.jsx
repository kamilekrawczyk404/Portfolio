import { useEffect, useState } from "react";
import anime from "animejs";

export const Grid = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const GRID_WIDTH = Math.floor(width / 135);
  const GRID_HEIGHT = Math.floor(height / 70);

  const dots = [];
  let index = 0;

  useEffect(() => {
    let index = Math.floor(Math.random() * dots.length);

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.5, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -5, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      boxShadow: [
        { value: "0px 0px 10px red", easing: "easeOutSine", duration: 250 },
        { value: "0px 0px 0px red", easing: "easeOutSine", duration: 250 },
      ],

      delay: anime.stagger(250, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: index,
      }),
      loop: true,
    });
  }, [index]);

  useEffect(() => {
    const resizing = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    addEventListener("resize", resizing);

    return () => {
      removeEventListener("resize", resizing);
    };
  }, []);

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="xl:p-12 md:p-8 p-4 bg-gray-950 rounded-sm border-[.125rem] border-transparent"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="select-none dot-point h-[0.25rem] aspect-square rounded-full bg-gradient-to-b from-red-600 to-red-500 opacity-0 group-hover:from-red-500 group-hover:to-red-500"
            data-index={index}
          />
        </div>,
      );
      index++;
    }
  }

  return (
    <div className={"z-20 relative w-1/2 h-full"}>
      <section
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        className={"z-10 grid w-fit gap-[.0725rem]"}
      >
        {dots}
      </section>
    </div>
  );
};
