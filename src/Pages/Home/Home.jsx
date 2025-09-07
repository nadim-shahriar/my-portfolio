import { Navbar } from "../../Shared/Navbar/Navbar";
import { AboutMe } from "../AboutMe/AboutMe";
import { Banner } from "../Banner/Banner";
import { Summary } from "../Summary";

export const Home = () => {
  return (
    <div className="bg-[#D7D7D7]">
      <Banner></Banner>
      <Summary></Summary>
      <AboutMe></AboutMe>
    </div>
  );
};
