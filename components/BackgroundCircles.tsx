import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <h3  className="absolute text-xl text-[#f7ab0a] text-opacity-100 bottom-16 animate-pulse">Hello World</h3>
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#f7ab0a] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
      <div className="absolute bottom-10 border-b-4 rounded-full border-[#fa1313] opacity-50 h-[100px] w-[100px] animate-wiggle" />
      <div className="absolute bottom-10 border-t-4 rounded-full border-[#f7ab0a] opacity-50 h-[100px] w-[100px] animate-wiggle" />
      <div />
    </motion.div>
  );
};

export default BackgroundCircles;
