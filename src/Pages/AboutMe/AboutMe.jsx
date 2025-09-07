import { Parallax } from "react-parallax";
import bg1 from "../../assets/bg1.svg";
import separator from '../../assets/separator.png'

export const AboutMe = () => {
  return (
    <Parallax
      bgImage={bg1}
      bgImageAlt="Tech"
      strength={-200}
      className="h-[950px] font2 py-[100px] text-black"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold border-4 px-10 p-2">ABOUT ME</h1>
        <p className="px-50 text-center py-10">
          I am Md. Nadim Shahriar Swajan. I have completed Bachelor in Comuputer
          Science & Engineering form East Dekta University, Chattogram,
          Bangladesh. I am currently exploring the world of Networing. I am
          serving as an Assistant Engineering(Service Management) at TekVision,
          a sister Consern of Youngone Ind. Ltd.{" "}
        </p>
        <button className="btn mt-4 text-black uppercase bg-transparent border-black border-2 border-y-0 rounded-none shadow-none">
          {" "}
          Explore More
        </button>
        <div className="my-[85px]">
            <img src={separator} alt="" />
        </div>
      </div>
    </Parallax>
  );
};
