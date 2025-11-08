import { Parallax } from "react-parallax";
import { Navbar2 } from "../../Shared/Navbar/Navbar2";
import edu from "../../../src/assets/edu.jpg";
import "./AboutMe.css";

export const AboutMe2 = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold border-4 px-10 p-2">ABOUT ME</h1>
        <p className="px-4 lg:px-50 text-center py-10">
          I am Md. Nadim Shahriar Swajan. I have completed Bachelor in Comuputer
          Science & Engineering form East Dekta University, Chattogram,
          Bangladesh. I am currently exploring the world of Networing. I am
          serving as an Assistant Engineering(Service Management) at TekVision,
          a sister Consern of Youngone Ind. Ltd.{" "}
        </p>
      </div>
      <Parallax
        bgImage={edu}
        bgImageAlt="Tech"
        strength={-300}
        className=" h-[600px] font2 py-[100px] text-black"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-44 gap-10">
          <div className="relative">
            <h2 className="text-2xl uppercase font-bold">
              EAST DELTA UNIVERSITY
            </h2>
            <h2 className="text-xl mt2 font-medium">
              BSc. In Computer Science & Engineering
            </h2>
            <p className="mt-4 text-gray-200">
              The CSE Program of East Delta University offers standard curricula
              that cover contemporary areas of computational science as well as
              the areas that have traditionally formed the core of the
              discipline. The degree is intended to prepare students for
              successful careers in a global economy. This is achieved by
              providing students with sound domain knowledge, in-depth research
              understanding, inculcating leadership attributes, and developing
              soft skills and experiences needed to meet the challenges and
              opportunities of a global market characterized by complexity,
              uncertainty, and diversity.
            </p>
          </div>
        </div>
      </Parallax>
      <div className="bgimg1  font2 text-white">
        <div className="bg-black/50 py-50 grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-44 gap-10">
          <div className="relative">
            <h2 className="text-xl uppercase font-bold">
              Bakalia Govt. College, Chattogram
            </h2>
            <h2 className="text-lg mt2 font-medium">HSC In SCIENCE</h2>
            <p className="mt-4 text-gray-200">
              Bakalia Government College is a public institution in Chittagong,
              Bangladesh, that offers higher secondary and undergraduate
              education. Initially founded in 1966 as the Chittagong Government
              Commercial Institute, it was officially converted into a general
              college in 2016 to offer a broader range of academic programs,
              including Science, Arts, and Commerce at the HSC level. The
              college is located in the Bakalia area and is affiliated with the
              Chittagong Education Board. Known for its dedicated faculty and
              commitment to student development, the college also provides a
              vibrant campus life with various extracurricular activities, such
              as debate, sports, and cultural clubs, to foster well-rounded
              personal and social growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
