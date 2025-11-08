import separator from "../../assets/separator.png";
import { Navbar2 } from "../../Shared/Navbar/Navbar2";


export const Contact2 = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div className="flex flex-col py-20  lg:p-20 items-center">
        <h1 className="text-3xl tracking-widest text-black font2 font-semibold border-4 px-10 p-2">
          Contact
        </h1>
        <div className="my-[85px]">
          <img src={separator} alt="" />
        </div>
        <div className="grid grid-cols-1 gap-7 w-[350px]">
          <input
            className="border-l-2 border-b-2 pl-4 p-2 text-black  lg:w-[450px] border-black"
            type="text"
            placeholder="ENTER YOUR NAME*"
          />
          <input
            className="border-l-2 border-b-2 pl-4 p-2 text-black lg:w-[450px] border-black"
            type="text"
            placeholder="ENTER YOUR NAME*"
          />
          <input
            className="border-l-2 border-b-2 pl-4 text-black p-2 lg:w-[450px] border-black"
            type="text"
            placeholder="ENTER YOUR NAME*"
          />
          <textarea
            className="h-[150px] border-l-2 text-black border-b-2 pl-4 p-2"
            placeholder="You Massage"
            name=""
            id=""
          ></textarea>
        </div>
        <button className="btn mt-10 px-7 font-bold text-black uppercase bg-transparent border-black border-2 border-y-0 rounded-none shadow-none">
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};
