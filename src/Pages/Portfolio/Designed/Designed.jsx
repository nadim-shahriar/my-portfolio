import pr1 from "../../../../src/assets/rekc.png";
import pr2 from "../../../../src/assets/restte.png";
import pr3 from "../../../../src/assets/chta.png";
import pr4 from "../../../../src/assets/st.png";
import pr5 from "../../../../src/assets/th.png";
import pr6 from "../../../../src/assets/ac.png";
import pr7 from "../../../../src/assets/cd.png";
import pr8 from "../../../../src/assets/dn.png";
import pr9 from "../../../../src/assets/rf.png";
import pr10 from "../../../../src/assets/aiu.png";
import pr11 from "../../../../src/assets/pw.png";
import pr12 from "../../../../src/assets/tw.png";
import pr13 from "../../../../src/assets/wpr.png";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";
import { Navbar2 } from "../../../Shared/Navbar/Navbar2";

export const Designed = () => {
  return (
    <div className="container mx-auto text-center mb-10">
        <Navbar2></Navbar2>
        {/* <Link to={'/'} className=""><button className="font1 btn my-5 font-bold">Go to Home</button></Link> */}
      <h2 className="text-2xl mb-10 text-center font-semibold ">Designed Projects</h2>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr4}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Smart Ticketing</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://smrtticket.netlify.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr2}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Real State</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://realste.netlify.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr3}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Chefs Table</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://chefstble.netlify.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr1}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Knowladge Cafe</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://reknca.netlify.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr5}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Tea House</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://teah0use.netlify.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr6}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Alpha Clash</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://incandescent-concha-b867e7.netlify.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr7}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Car Doctor</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://cars-doctor-c3c6a.web.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr8}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Dragon News</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://react-dragon-news-auth-cc4e3.web.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr9}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Retro Forum</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://splendid-pixie-2e010e.netlify.app/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr10}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">AI Universe</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://nadim-shahriar.github.io/ai-universe/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr11}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Penguin Fashion</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://nadim-shahriar.github.io/penguin-web/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr12}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Hero Travel</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://nadim-shahriar.github.io/travel-web/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full h-72 w-96 shadow-sm">
          <figure className="w-full h-full brightness-150">
            <img
              src={pr13}
              alt="Shoes"
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font1 font-bold">Web Developer Protfolio</h2>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://nadim-shahriar.github.io/web-developer-portfolio/">
                <button className="btn font1 border-none text-shadow-cyan-950 font-bold bg-gradient-to-r from-emerald-700 to-emerald-200">
                  Visit Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
