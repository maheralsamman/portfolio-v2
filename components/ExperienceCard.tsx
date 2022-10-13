import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
      initial={{y:-100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration: 1.2}}
      viewport={{once:true}}
        className="w-32 h-32 rounded-full xl-w-[200px] xl:h-[200px] object-cover object-top"
        src="https://media.istockphoto.com/vectors/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-vector-id980239992?k=20&m=980239992&s=612x612&w=0&h=xAzgjGwK4PPI3k6ZMnPT-I-_BYjeIGwwIf-OgTYMZoc="
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of PAPOFAM</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/da55259f760c8c5606b1cab6e6a9f61bbc60bf0d-500x500.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://cdn.sanity.io/images/ltuexkre/production/c4f385a736afb18e7cb37277d966f5b0b89b7c77-506x470.png" alt="" />
            {/* TECH USED*/}
        </div>
        <p className="uppercase py-5 text-gray-300 text-lg">Started word.... - ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            {/* To make it scrollable we just add hight and add overflow scollable*/}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
