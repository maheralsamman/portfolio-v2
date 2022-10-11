import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name is Maher Alsamman",
      "Guys-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img 
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
      src="https://media.istockphoto.com/vectors/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-vector-id980239992?k=20&m=980239992&s=612x612&w=0&h=xAzgjGwK4PPI3k6ZMnPT-I-_BYjeIGwwIf-OgTYMZoc=" 
      alt="my picture" />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Hero;
