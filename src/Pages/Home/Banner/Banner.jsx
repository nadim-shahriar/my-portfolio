import { FaGithub, FaLinkedin } from "react-icons/fa";
import Me from "./../../../assets/ME2.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div>
      <div className="h-[650px] bg-black">
        {" "}
        <p className="font-bold">HI</p>
      </div>
      <p className="absolute text-black z-0">Hi</p>
      <div className="h-[800px] w-2/3 bg-[#D7D7D7] rotate-[9deg] -top-20 -left-[300px] absolute">
        {" "}
      </div>
      <div className="absolute flex px-40 top-20 gap-10 font1">
        <div className="flex flex-col justify-center w-1/2 text-black ">
          <h2 className="text-3xl">Hi! I am</h2>
          <h1 className="text-4xl mt-10 font-bold">
            Md Nadim Shahriar <br /> Swajan
          </h1>
          <p className="text-[#909090] mt-3">
            IT ENTHUSIAST | WEB DEVELOPMENT PROFICIENT
          </p>
          <div className="flex gap-8 mt-20">
            <div  style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)" }} className="bg-[#C4C4C4] rounded-sm">
              <button className=" btn px-3 bg-[#C4C4C4] border-none text-3xl ">
                <Link>
                  <FaGithub></FaGithub>
                </Link>
              </button>
            </div>
            <div  style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)" }} className="bg-[#C4C4C4] rounded-sm">
              <button className=" btn px-3 bg-[#C4C4C4] border-none text-3xl ">
                <Link>
                  <FaLinkedinIn></FaLinkedinIn>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-40">
          <img className="h-[550px]" src={Me} alt="" />
        </div>
      </div>
    </div>
  );
};
