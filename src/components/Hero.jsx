import { motion } from "framer-motion";

import { styles } from "../styles";
import * as React from "react";
import Textspan from "./Textspan";
// import { ComputersCanvas } from "./canvas";

const Hero = (props) => {
  const sentence = "NANDAR WIN".split("");

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <div
          className={`absolute inset-0 top-[160px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          {/* <div className="flex gap-4 absolute w-[40%] h-auto top-44 right-[-15rem] font-bold  rotate-90 justify-evenly">
            <a
              href="mailto:nwin21210@gmail.com"
              className="flex gap-2 items-center justify-center"
            >
              <p className="text-[13px]">SEND EMAIL</p>
              <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  {...props}
                  className="rotate-180 bg-white rounded-full text-black"
                >
                  <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
                </svg>
              </div>
            </a>
            <a
              href="tel:+4733378901"
              className="flex gap-2 items-center justify-center"
            >
              <p className="text-[13px]">CALL ME</p>
              <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  {...props}
                  className=" text-black "
                >
                  <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
              </div>
            </a>
            <a
              href="https://github.com/nandarwin19"
              className="flex gap-2 items-center justify-center"
            >
              <p className="text-[13px]">GITHUB</p>
              <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  {...props}
                  className=" bg-white rounded-full text-black"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </div>
            </a>
          </div> */}
          {/* </div> */}

          <div className="quirky-robot tracking-widest">
            <h1 className="text-white text-xl  -mb-4 quirky-robot tracking-widest">
              Hello, I am
            </h1>

            {sentence.map((letter, index) => (
              <Textspan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </Textspan>
            ))}

            <p className={`${styles.heroSubText}  text-white-100 -mt-4`}>
              <span className="font-bold text-[#5eb7ff] quirky-robot tracking-widest">
                Front-end Developer / Photographer
              </span>
              .
            </p>
            <br />
            {/* <h1 className="text-2xl">I am enthusim in learning new things</h1> */}

            <p className=" my-1 quirky-robot font-25">
              My mission is to design and develop a website
            </p>
            <p className="my-1 quirky-robot font-25">
              {" "}
              that you and your audience love.
            </p>
            {/* <p className="text-md my-1">
              Unique websites for your unique business
            </p> */}
            <div className="flex gap-8">
              <a href="mailto:nwin21210@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className=" bg-[#5eb7ff] mt-4 py-2 px-3 hover:bg-white active:bg-[#5eb7ff]"
                >
                  <span className="quirky-robot font-25 font-bold text-black">
                    Let's get in touch
                  </span>
                </motion.button>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`flex absolute bottom-8 max-w-7xl mx-auto ${styles.paddingX} flex
          flex-row items-start gap-4 w-[40%] h-auto mt-[100px] font-bold
          justify-evenly`}
        >
          {/* flex absolute bottom-8 max-w-7xl mx-auto ${styles.paddingX} flex
          flex-row items-start gap-4 w-[60%] h-auto mt-[100px] font-bold
          justify-between */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:nwin21210@gmail.com"
            className="flex gap-2 items-center  justify-center cursor-pointer "
          >
            <p className="text-[13px]">SEND EMAIL</p>
            <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                {...props}
                className=" text-black "
              >
                <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg>
            </div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="tel:+4733378901"
            className="flex gap-2 items-center justify-center"
          >
            <p className="text-[13px]">CALL ME</p>
            <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                {...props}
                className="rotate-90 bg-white rounded-full text-black"
              >
                <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
              </svg>
            </div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/nandarwin19"
            className="flex gap-2 items-center justify-center"
          >
            <p className="text-[13px]">GITHUB</p>
            <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                {...props}
                className=" bg-white rounded-full text-black"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </div>
          </motion.a>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
