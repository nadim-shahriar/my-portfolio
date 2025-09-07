import Marquee from "react-fast-marquee";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import git from "../../assets/git.png";
import node from "../../assets/node.svg";
import mongodb from "../../assets/mongodb.svg";
import tailwind from "../../assets/tailwind.svg";
import express from "../../assets/express.svg";
import ccna from "../../assets/ccna.png";
import C from "../../assets/C.svg";
import Python from "../../assets/Python.svg";
import { SiMikrotik } from "react-icons/si";

export const Skills = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl  font-semibold border-4 px-16 p-2">SKILLS</h1>
      <div className="my-12 w-2/4">
        <Marquee>
          <div className="mr-16">
            <img className="h-[100px]" src={ccna} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              ccna
            </h3>
          </div>
          <div className="mr-16">
            <SiMikrotik className="text-[100px]"></SiMikrotik>
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              mtcna
            </h3>
          </div>
          <div className="mr-16">
            <img src={html} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              HTML5
            </h3>
          </div>
          <div className="mr-16">
            <img src={css} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              CSS3
            </h3>
          </div>
          <div className="mr-16">
            <img src={js} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              javascript
            </h3>
          </div>
          <div className="mr-16">
            <img className="w-[85.929px] h-[100px]" src={react} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              react
            </h3>
          </div>
          <div className="mr-16">
            <img className="w-[85.929px] h-[100px]" src={Python} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              Python
            </h3>
          </div>
          <div className="mr-16">
            <img className="h-[100px]" src={git} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              GIT
            </h3>
          </div>
          <div className="mr-16">
            <img className="h-[100px]" src={C} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              C
            </h3>
          </div>
          <div className="mr-16">
            <img className="h-[100px]" src={node} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              NODEJS
            </h3>
          </div>
          <div className="mr-16">
            <img className="h-[100px]" src={mongodb} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              Mongo DB
            </h3>
          </div>
          <div className="mr-16">
            <img className="h-[100px]" src={tailwind} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              tailwind4
            </h3>
          </div>
          <div className="mr-16">
            <img className="h-[100px]" src={express} alt="" />
            <h3 className="text-xl uppercase text-center mt-3 font-medium">
              EXpressjs
            </h3>
          </div>
        </Marquee>
      </div>
      
    </div>
  );
};
