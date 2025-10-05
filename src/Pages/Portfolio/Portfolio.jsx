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
      
      <div className="flex justify-center bg-[#1A1A1A] py-8 space-x-6">
        {/* ALL Tab */}
        <label className="relative cursor-pointer">
          <input type="radio" name="my_tabs" className="hidden peer" />
          <span className="lg:px-14 py-2 text-gray-400 peer-checked:text-white transition-colors">
            ALL
          </span>
          <span className="absolute -bottom-2 left-0 h-[2px] bg-white w-0 peer-checked:w-full transition-all duration-300"></span>
        </label>
        {/* CODED Tab */}
        <label className="relative cursor-pointer">
          <input type="radio" name="my_tabs" className="hidden peer" defaultChecked />
          <span className="lg:px-14 py-2 text-gray-400 peer-checked:text-white transition-colors">
            CODED
          </span>
          <span className="absolute -bottom-2 left-0 h-[2px] bg-white w-0 peer-checked:w-full transition-all duration-300"></span>
        </label>
        {/* DESIGNED Tab */}
        <label className="relative cursor-pointer">
          <input type="radio" name="my_tabs" className="hidden peer" />
          <span className="lg:px-14 py-2 text-gray-400 peer-checked:text-white transition-colors">
            DESIGNED
          </span>
          <span className="absolute -bottom-2 left-0 h-[2px] bg-white w-0 peer-checked:w-full transition-all duration-300"></span>
        </label>
      </div>


      <div className="bg-[#1A1A1A] text-white text-center p-3">
        <p>And many more to come</p>
      </div>
    </div>
  );
};
