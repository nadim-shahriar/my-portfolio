import { Parallax } from "react-parallax";
import bg4 from "../../assets/bg4.jpg";
import separator from "../../../src/assets/Separator.png";
import { SiCisco, SiMikrotik } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Skills } from "../Skills/Skills";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <Parallax
      bgImage={bg4}
      bgImageAlt="Tech"
      strength={-400}
      className="h-[1600px] lg:h-[1300px] font2 py-[100px] text-black"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold border-4 px-10 p-2">ABOUT ME</h1>
        <p className="px-4 lg:px-50 text-center py-10">
          I am Md. Nadim Shahriar Swajan. I have completed Bachelor in Comuputer
          Science & Engineering form East Dekta University, Chattogram,
          Bangladesh. I am currently exploring the world of Networing. I am
          serving as an Assistant Engineering(Service Management) at TekVision,
          a sister Consern of Youngone Ind. Ltd.{" "}
        </p>
        <Link to={'/aboutme'}><button className="btn mt-4 text-black uppercase bg-transparent border-black border-2 border-y-0 rounded-none shadow-none">
          {" "}
          Explore More
        </button></Link>
        <div className="my-[85px]">
          <img src={separator} alt="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-44 gap-10">
          <div className="relative">
            <h2 className="text-xl uppercase font-bold">CCNA</h2>
            <p className="textarea-md">
              Networking professional with CCNA expertise in configuring,
              managing, and troubleshooting Cisco routers and switches, ensuring
              secure and efficient enterprise connectivity.
            </p>
            <span className="text-7xl opacity-20 absolute -left-6  -top-7">
              <SiCisco></SiCisco>
            </span>
          </div>
          <div className="relative">
            <h2 className="text-xl uppercase font-bold">Web DevelopMent</h2>
            <p className="textarea-md">
              Full-stack MERN developer skilled in building scalable web
              applications with MongoDB, Express.js, React, and Node.js — from
              responsive frontends to secure backend APIs.
            </p>
            <span className="text-6xl opacity-20 absolute -left-6  -top-5">
              <CgWebsite></CgWebsite>
            </span>
          </div>
          <div className="relative">
            <h2 className="text-xl uppercase font-bold">MTCNA</h2>
            <p className="textarea-md">
              Networking professional with CCNA expertise in configuring,
              managing, and troubleshooting Cisco routers and switches, ensuring
              secure and efficient enterprise connectivity.
            </p>
            <span className="text-6xl opacity-20 absolute -left-6 -top-5">
              <SiMikrotik></SiMikrotik>
            </span>
          </div>
        </div>
        <div className="my-[85px]">
          <img src={separator} alt="" />
        </div>
        <div id="skills">
          <Skills></Skills>
        </div>
        
      </div>
    </Parallax>
  );
};
