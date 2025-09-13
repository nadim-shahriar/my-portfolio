import { Footer } from "../../Shared/Footer/Footer";
import { Navbar } from "../../Shared/Navbar/Navbar";
import { AboutMe } from "../AboutMe/AboutMe";
import { Banner } from "../Banner/Banner";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/portfolio";
import { Skills } from "../Skills/Skills";
import { Summary } from "../Summary/Summary";

export const Home = () => {
  return (
    <div className="bg-[#D7D7D7]">
      <Banner></Banner>
      <Summary></Summary>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};
