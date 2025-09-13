import { div } from "framer-motion/client";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <div className="bgImage1 bg-fixed mb-10">
      <div className="bg-black/50">
        <div className="flex p-20 justify-center">
          <h1 className="text-3xl tracking-widest text-black font2 font-semibold border-4 px-10 p-2">
            Portfolio
          </h1>
        </div>
      </div>
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs rounded-none justify-center tabs-box">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Tab 1"
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Tab 3"
          />
        </div>
      </div>
      <div className="bg-[#1A1A1A] text-white text-center p-3">
        <p>And many more to come</p>
      </div>
    </div>
  );
};
