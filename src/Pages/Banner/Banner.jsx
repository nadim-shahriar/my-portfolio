import { FaGithub, FaLinkedin } from "react-icons/fa";
import Me from "../../assets/ME2.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import bg3 from "../../assets/bg3.jpg";

export const Banner = () => {
  return (
    <Parallax
      bgImage={bg3}
      bgImageAlt="Tech"
      strength={350}
      className=""
    >
      <div>
        <div className="h-[950px] lg:h-[630px]"> </div>
        <div className=" h-[645px] z-2 lg:z-0 lg:h-[800px] w-4/3 lg:w-[800px] bg-black rotate-[-10deg] -right-16 lg:rotate-[9deg] -bottom-[235px] lg:bottom-[300px] lg:-top-20 lg:-right-[160px] absolute">
          {" "}
        </div>
        <div className="absolute flex flex-col-reverse lg:flex-row lg:px-40 top-20 gap-10 font1">
          <div className="lg:flex z-3 px-5 lg:flex-col justify-center lg:w-1/2 text-white lg:text-black ">
            <h2 className="text-3xl">Hi! I am</h2>
            <h1 className="text-2xl lg:text-4xl lg:mt-10 font-bold">
              Md Nadim Shahriar
              <span className="hidden lg:inline"><br /></span>
              <span> Swajan</span>
            </h1>

            <p className="text-[#686767] mt-3">
              ASSISTANT ENGINEER at TEKVISION (BD) LIMITED | IT ENTHUSIAST | WEB DEVELOPMENT PROFICIENT
            </p>

            <div className="flex gap-8 mt-2 lg:mt-16">
              <div
                style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
                className="bg-[#C4C4C4] rounded-sm"
              >
                <button className=" btn px-3 bg-[#C4C4C4] border-none text-3xl ">
                  <Link>
                    <FaGithub></FaGithub>
                  </Link>
                </button>
              </div>
              <div
                style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
                className="bg-[#C4C4C4] rounded-sm"
              >
                <button className=" btn px-3 bg-[#C4C4C4] border-none text-3xl ">
                  <Link>
                    <FaLinkedinIn></FaLinkedinIn>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className=" lg:w-[520px] lg:ml-40">
            <img className="h-[550px]" src={Me} alt="" />
          </div>
        </div>
      </div>
    </Parallax>
  );
};
