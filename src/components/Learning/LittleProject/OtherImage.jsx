import { motion } from "framer-motion";

export const OtherImage = () => {
  const animationOrder = {
    initial: 0,
    fadeInEnd: 0.15,
    showParagraphOne: 0.25,
    hideParagraphOne: 0.3,
    showParagraphTwoStart: 0.35,
    showParagraphTwoEnd: 0.4,
    hideParagraphTwo: 0.5,
    showLoadingScreenStart: 0.53,
    showLoadingScreenEnd: 0.58,
    createBranchStart: 0.65,
    createBranchEnd: 0.7,
    createBranchFadeInStart: 0.78,
    createBranchFadeInEnd: 0.85,
    endTextFadeInStart: 0.95,
    endTextFadeInEnd: 1,
  };
  return (
    <section className={"h-[800vh]"}>
      <div className={"h-[800vh] relative"}>
        <div
          className={
            "sticky top-1/2 flex origin-center -translate-y-1/2 justify-center"
          }
        >
          <motion.div></motion.div>
        </div>
      </div>
    </section>
  );
};
