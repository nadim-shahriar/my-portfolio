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
        <div className="h-[630px]"> </div>
        <div className="h-[800px] w-2/3 bg-black rotate-[9deg] -top-20 -right-[160px] absolute">
          {" "}
        </div>
        <div className="absolute flex px-40 top-20 gap-10 font1">
          <div className="flex flex-col justify-center w-1/2 text-black ">
            <h2 className="text-3xl">Hi! I am</h2>
            <h1 className="text-4xl mt-10 font-bold">
              Md Nadim Shahriar <br /> Swajan
            </h1>
            <p className="text-[#686767] mt-3">
              IT ENTHUSIAST | WEB DEVELOPMENT PROFICIENT
            </p>

            <div className="flex gap-8 mt-16">
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
          <div className="w-[520px] ml-40">
            <img className="h-[550px] " src={Me} alt="" />
          </div>
        </div>
      </div>
    </Parallax>
  );
};
