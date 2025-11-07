import { useState } from "react";
import "./Portfolio.css";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("designed");

  // Tab names in your desired order
  const tabs = ["all", "designed", "coded"];

  return (
    <div className="bgImage1 bg-fixed mb-10">
      {/* Header */}
      <div className="bg-black/50">
        <div className="flex p-20 justify-center">
          <h1 className="text-3xl tracking-widest text-black font2 font-semibold border-4 px-10 p-2">
            Portfolio
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center bg-[#1A1A1A] py-8 space-x-6">
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
      <div className="bg-[#1A1A1A] text-white flex justify-center items-center text-center min-h-[40vh] p-10">
        {activeTab === "all" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">All Projects</h2>
            <p className="text-gray-300 mb-6">
              A mix of coded and designed projects.
            </p>
            <div className="grid  gap-6">
              <a href=""><div className="bg-gray-800 p-6 rounded-lg">💻 GitHub Portfolio</div></a>
            </div>
          </div>
        )}

        {activeTab === "designed" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Designed Projects</h2>
            <p className="text-gray-300 mb-6">
              Creative UI/UX and visual design work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="bg-gray-800 p-6 rounded-lg">🎨 Landing Page Design</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">🖌️ Mobile App UI</div>
              <div className="bg-gray-800 p-6 rounded-lg">🧩 Logo Design</div>
            </div>
          </div>
        )}

        {activeTab === "coded" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Coded Projects</h2>
            <p className="text-gray-300 mb-6">
              Web and app projects built using modern frameworks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">⚡ React Portfolio</div>
              <div className="bg-gray-800 p-6 rounded-lg">🛒 E-commerce Website</div>
              <div className="bg-gray-800 p-6 rounded-lg">📂 Dashboard App</div>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="bg-[#1A1A1A] text-white text-center p-3">
        <p>And many more to come</p>
      </div>
    </div>
  );
};
