import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Skills = () => {
  return (
    <div id="skills">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>MY SKILLS</h2>
      </motion.div>
      <motion.div
        variants={textVariant()}
        className="flex flex-row flex-wrap justify-center gap-10 my-8"
      >
        {technologies.map((technology) => (
          <div
            className="py-3 px-3 w-36 h-32 shadow-3xl border bg-[#000000] border-blue-600 flex flex-col items-center justify-center hover:scale-105 transition-all duration-200"
            key={technology.name}
          >
            <img src={technology.icon} className="w-12 h-12" alt="" />
            <p className="text-[14px] mt-1">{technology.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skills, "");
