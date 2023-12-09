import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const About = () => {
  return (
    <div id="aboutme">
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText}`}>ABOUT ME</h2>
      </motion.div>
      <div className="about quirky-robot tracking-widest text-[2rem] text-center max-w-3xl w-full mx-auto">
        Hey, I'm{" "}
        <span className="cartoon-blocks text-[3rem] md:text-[5rem]">
          Nandar Win
        </span>
        , a 19-year-old from Myanmar diving into Front-end development since
        April 2023. Join me as I craft digital experiences through code and
        creativity.{" "}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
