import { useState } from "react";
import "./Portfolio.css";
import { Designed } from "./Designed/Designed";
import pr1 from "../../../src/assets/rekc.png";
import pr2 from "../../../src/assets/restte.png";
import pr3 from "../../../src/assets/chta.png";
import pr4 from "../../../src/assets/st.png";
import pr5 from "../../../src/assets/th.png";
import pr6 from "../../../src/assets/ac.png";
import { Link, useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("designed");

  const tabs = ["all", "designed", "coded"];
  const navigate = useNavigate();

  return (
    <div className="bgImage1 bg-fixed mb-10">
      {/* Header */}
      <div className="bg-black/50">
        <div className="flex p-20 justify-center">
          <h1 className="text-3xl uppercase tracking-widest text-black font2 font-semibold border-4 px-10 p-2">
            Portfolio
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center bg-[#1A1A1A]/90 py-8 space-x-6">
        {tabs.map((tab) => (
          <label key={tab} className="relative cursor-pointer">
            <input
              type="radio"
              name="my_tabs"
              className="hidden peer"
              checked={activeTab === tab}
              onChange={() => setActiveTab(tab)}
            />
            <span className="lg:px-14 py-2 text-gray-400 peer-checked:text-white transition-colors uppercase">
              {tab}
            </span>
            <span className="absolute -bottom-2 left-0 h-[2px] bg-white w-0 peer-checked:w-full transition-all duration-300"></span>
          </label>
        ))}
      </div>

      {/* Tab Content (Centered) */}
      <div className="bg-[#1A1A1A]/80 text-white flex justify-center items-center text-center min-h-[40vh] p-10">
        {activeTab === "all" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">All Projects</h2>
            <p className="text-gray-300 mb-6">
              A mix of coded and designed projects.
            </p>
            <div className="grid  gap-6">
              <a href="https://github.com/nadim-shahriar">
                <div className="bg-black/70 p-6 hover:bg-base-300/10 rounded-lg">
                  💻 GitHub Portfolio
                </div>
              </a>
            </div>
          </div>
        )}

        {activeTab === "designed" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Designed Projects</h2>
            <p className="text-gray-300 mb-6">
              Creative UI/UX and visual design work.
            </p>

            <div>
              <div className="grid lg:grid-cols-3 gap-5">
                <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
                  <figure className="w-full h-full brightness-200">
                    <img
                      src={pr4}
                      className="w-full h-full object-cover object-top"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font1 font-bold">
                      Smart Ticketing
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <a href="https://smrtticket.netlify.app/">
                        <button className="btn bg-black/40 hover:bg-base-300/10  border-none text-white font1 font-bold px-5">
                          Visit Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
                  <figure className="w-full h-full brightness-200">
                    <img
                      src={pr2}
                      className="w-full h-full object-cover object-top"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font1 font-bold">Real State</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <a href="https://realste.netlify.app/">
                        <button className="btn bg-black/40 hover:bg-base-300/10  border-none text-white font1 font-bold px-5">
                          Visit Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
                  <figure className="w-full h-full brightness-200">
                    <img
                      src={pr3}
                      className="w-full h-full object-cover object-top"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font1 font-bold">Chefs Table</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <a href="https://chefstble.netlify.app/">
                        <button className="btn bg-black/40 hover:bg-base-300/10  border-none text-white font1 font-bold px-5">
                          Visit Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
                  <figure className="w-full h-full brightness-200">
                    <img
                      src={pr1}
                      className="w-full h-full object-cover object-top"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font1 font-bold">
                      Knowladge Cafe
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <a href="https://reknca.netlify.app/">
                        <button className="btn bg-black/40 hover:bg-base-300/10  border-none text-white font1 font-bold px-5">
                          Visit Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
                  <figure className="w-full h-full brightness-200">
                    <img
                      src={pr5}
                      className="w-full h-full object-cover object-top"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font1 font-bold">Tea House</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <a href="https://teah0use.netlify.app/">
                        <button className="btn bg-black/40 hover:bg-base-300/10  border-none text-white font1 font-bold px-5">
                          Visit Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
                  <figure className="w-full h-full brightness-200">
                    <img
                      src={pr6}
                      className="w-full h-full object-cover object-top"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font1 font-bold">Alpha Clash</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <a href="https://incandescent-concha-b867e7.netlify.app/">
                        <button className="btn bg-black/40 hover:bg-base-300/10  border-none text-white font1 font-bold px-5">
                          Visit Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/designed")}
                className="btn my-6 bg-black/50 hover:bg-base-300/10  border-none text-white font1 font-bold px-5"
              >
                See all
              </button>
            </div>
          </div>
        )}

        {activeTab === "coded" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Coded Projects</h2>
            <p className="text-gray-300 mb-6">
              Web and app projects built using modern frameworks.
            </p>
            <div className="">
              <a href="https://github.com/nadim-shahriar?tab=repositories">
                <div className="bg-black/70 p-6 rounded-lg hover:bg-base-300/10 ">⚡ CODE</div>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/70 text-white text-center p-3">
        <p className="font2 font-semibold">And many more to come.</p>
      </div>
    </div>
  );
};
