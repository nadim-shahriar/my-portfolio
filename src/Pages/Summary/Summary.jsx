import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import './Summary.css'

export const Summary = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="bgImage bg-fixed font2 text-sm p-20 text-black font-medium relative">
      <div>
        <div className="text-[300px] text-black right-20 -bottom-10 rotate-[24deg] absolute">
          IT
        </div>
        <div className="-right-11 top-0 -bottom-10  absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="454"
            height="469"
            viewBox="0 0 454 469"
            fill="none"
          >
            <path
              d="M402.104 107.34C437.958 123.219 454.151 165.155 438.273 201.009L325.23 456.262L51.7922 335.166C15.9386 319.287 -0.254508 277.35 15.6237 241.497L128.666 -13.7559L402.104 107.34Z"
              stroke="black"
              stroke-width="18"
            />
          </svg>
        </div>
      </div>

      <h1 className=" text-3xl font-semibold">Summary</h1>
      <div className="mt-4 ">
        <motion.div
          initial={{ height: 58 }} // start collapsed (~3 lines)
          animate={{ height: isExpanded ? contentHeight : 58 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden mt-4 w-2/3"
        >
          <div ref={contentRef}>
            <p>
              I am a results-driven Network Specialist and Web Developer with
              hands-on experience in computer networking, machine learning, and
              frontend web development technologies. I am currently pursuing
              CCNA and MTCNA training and quite familiar with networking
              equipment such as OLTs, MikroTik routers, switches, and other
              Cisco devices. Proficient in React, JavaScript, and Microsoft
              Office tools, I have also worked on AI-powered medical imaging
              solutions. I am passionate about building innovative, secure, and
              scalable systems that solve complex problems, improve user
              experiences, and support business growth.
            </p>
          </div>
        </motion.div>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="btn mt-4 border-black uppercase bg-transparent border-2 border-y-0 rounded-none  shadow-none"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};
