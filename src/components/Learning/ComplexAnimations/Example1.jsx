import { useAnimate } from "framer-motion";

export const Example1 = () => {
  const [scope, animate] = useAnimate();

  const handleClick = async () => {
    await animate("#target", { x: 150 });
    await animate("#target", { y: 100, rotate: "90deg" });
  };
  return (
    <div ref={scope} className={"flex items-center h-screen justify-center"}>
      <button
        className={"p-2 bg-amber-500 text-gray-700"}
        onClick={() => handleClick()}
      >
        Click me
      </button>
      <div className={"bg-gray-500 w-20 aspect-square"} id={"target"}></div>
    </div>
  );
};
