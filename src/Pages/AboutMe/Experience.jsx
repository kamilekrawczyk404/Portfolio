import { AnimatedDottedList } from "../../components/Lists/AnimatedDottedList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { PulsingContainer } from "../../components/PulsingContainer.jsx";
import { VerticalAnimatedLine } from "../../components/VerticalAnimatedLine.jsx";

export const Experience = () => {
  const ref = useRef(null);

  const experienceList = [
    {
      dateStart: new Date("2021-10-01"),
      dateEnd: new Date("2021-11-01"),
      place: "Nowy Sącz",
      title: "Centrum Kształcenia Zawodowego",
      description: [
        "Projektowanie i tworzenie aplikacji internetowych (optymalizacja UX oraz Ul, implementaja wygladu witryn na wersje mobilne, zasady SEO)",
        "Optymalizacja aplikacji pod wzgledem testów wydajnosciowych i skalowalności",
        "Asynchroniczna obstuga zadań, aktualizacja komponentów w tle, AJAX",
        "Tworzenie dodatkowych bibliotek umożliwiających łatwiejszą integracje pomiędzy komponentami",
        "Doświadczenie w administrowaniu bazami danych, projektowaniu, rozwoju, utrzymaniu i wsparciu produkcyjnym relacyjnych baz danych",
      ],
    },
    {
      dateStart: new Date("2020-10-01"),
      dateEnd: new Date("2020-11-01"),
      place: "Nowy Sącz",
      title: "Centrum Kształcenia Zawodowego",
      description: [
        "Projektowanie i tworzenie aplikacji internetowych (optymalizacja UX oraz Ul, implementaja wygladu witryn na wersje mobilne, zasady SEO)",
        "Optymalizacja aplikacji pod wzgledem testów wydajnosciowych i skalowalności",
        "Asynchroniczna obstuga zadań, aktualizacja komponentów w tle, AJAX",
        "Tworzenie dodatkowych bibliotek umożliwiających łatwiejszą integracje pomiędzy komponentami",
        "Doświadczenie w administrowaniu bazami danych, projektowaniu, rozwoju, utrzymaniu i wsparciu produkcyjnym relacyjnych baz danych",
      ],
    },
  ];

  return (
    <motion.section
      ref={ref}
      className={
        "relative z-30 flex flex-col lg:gap-y-16 gap-y-8 items-center justify-center w-1/2 p-8"
      }
    >
      <VerticalAnimatedLine
        ref={ref}
        maxLength={75}
        offset={["0.25 end", "end"]}
      />
      {experienceList.map((item, index) => (
        <ExperienceBox key={index} item={item} />
      ))}
    </motion.section>
  );
};

const ExperienceBox = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.25"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.65, 0.75],
    ["0%", "100%", "100%", "0%"],
  );

  const y = useTransform(scrollYProgress, [0.35, 0.475], [-100, -7]);

  const scaleX = useTransform(scrollYProgress, [0.475, 0.5], ["0%", "100%"]);

  return (
    <motion.div ref={ref} className={"w-full relative h-full"}>
      {/*dot and horizontal line*/}

      <motion.div
        style={{ scaleX, opacity }}
        className={
          "absolute left-[-2rem] top-1/2 -translate-y-1/2 h-[0.125rem] bg-red-600 origin-left w-[2rem] rounded-md shadow-sm shadow-red-600"
        }
      />
      <motion.div
        style={{ opacity, y }}
        className={
          "absolute left-[-2.4rem] top-1/2 -translate-y-1/2 w-[1rem] aspect-square rounded-md bg-red-600 origin-left"
        }
      />
      <ExperienceList item={item} />
    </motion.div>
  );
};

export const ExperienceList = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.25 end", "end 0.25"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.75, 1, 1, 1, 0.75],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0.5, 1, 0.5, 0],
  );

  const itemVariant = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
      },
    },
  };

  return (
    <PulsingContainer
      ref={ref}
      style={{ opacity, scale }}
      viewport={{ amount: 0.5 }}
      className={
        "p-4 w-full flex flex-col gap-y-4 h-full rounded-lg text-gray-300"
      }
    >
      <motion.h2
        variants={itemVariant}
        initial={"initial"}
        whileInView={"animate"}
        className={"text-3xl"}
        viewport={{ amount: 0.5 }}
      >
        {item.title}
      </motion.h2>
      <div className={"flex gap-x-2 text-red-600"}>
        <motion.span
          variants={itemVariant}
          initial={"initial"}
          whileInView={"animate"}
          className={"flex items-center gap-x-2 text-sm"}
        >
          <FontAwesomeIcon icon={faCalendar} />
          {`${
            item.dateStart.getMonth() < 10
              ? `0${item.dateStart.getMonth()}`
              : item.dateStart.getMonth()
          }.${item.dateStart.getFullYear()} - ${
            item.dateEnd.getMonth() < 10
              ? `0${item.dateEnd.getMonth()}`
              : item.dateEnd.getMonth()
          }.${item.dateEnd.getFullYear()}`}
        </motion.span>
        <motion.span
          variants={itemVariant}
          initial={"initial"}
          whileInView={"animate"}
          className={"flex items-center gap-x-2"}
        >
          |
          <FontAwesomeIcon icon={faLocationDot} />
          {item.place}
        </motion.span>
      </div>

      <AnimatedDottedList
        elements={item.description}
        className={"text-lg mt-4 mx-4 w-full"}
      />
    </PulsingContainer>
  );
};
