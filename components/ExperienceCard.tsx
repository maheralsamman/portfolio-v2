import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img
      initial={{y:-100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration: 1.2}}
      viewport={{once:true}}
        className="w-32 h-32 rounded-full xl-w-[200px] xl:h-[200px] object-cover object-top"
        src="https://media.istockphoto.com/vectors/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-vector-id980239992?k=20&m=980239992&s=612x612&w=0&h=xAzgjGwK4PPI3k6ZMnPT-I-_BYjeIGwwIf-OgTYMZoc="
      />
      <div>
        <h4>CEO of PAPOFAM</h4>
        <p>PAPAFAM</p>
        <div>
            {/* TECH USED*/}
            {/* TECH USED*/}
            {/* TECH USED*/}
        </div>
        <p>Started word.... - ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
