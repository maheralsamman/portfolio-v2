import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duratin: 1.5 }}
      className="flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img

        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]"
        src="https://maheralsamman.netlify.app/static/media/profilePic.35b50347.jpg"
        />
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="text-2xl underline decoration-[#f7ab0a]/50">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Enthusiastic developer with passion for tailored solutions seeking the
          position of a Full Stack Developer in a thriving, exciting and growing
          company, where I can utilize my skills to further work towards
          personal and professional development and contribute towards the
          prosperity of the organisation.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
