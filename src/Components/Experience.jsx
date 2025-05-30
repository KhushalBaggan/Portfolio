import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import expressjs from "../assets/expressjs.png";
import tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-400",
    },
    {
      id: 7,
      src: expressjs,
      title: "Express js",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <center><p className="m-4">{title}</p></center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;