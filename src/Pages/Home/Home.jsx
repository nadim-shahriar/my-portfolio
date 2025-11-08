import { Footer } from "../../Shared/Footer/Footer";
import { Navbar } from "../../Shared/Navbar/Navbar";
import { AboutMe } from "../AboutMe/AboutMe";
import { Banner } from "../Banner/Banner";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import { Skills } from "../Skills/Skills";
import { Summary } from "../Summary/Summary";

export const Home = () => {
  return (
    <div className="bg-[#D7D7D7]">
      <Navbar />
      <Banner />
      <Summary />

      {/* Add IDs for smooth scroll targets */}
      <section id="about">
        <AboutMe />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

