import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://cdn.sanity.io/images/ltuexkre/production/c4f385a736afb18e7cb37277d966f5b0b89b7c77-506x470.png"
        className="rounded-full border border-gray-500 object-cover 
        w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black  opacity-100">100%</p>
        </div>
      </div>
  
  );
}

export default Skill;
