import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import { MdKeyboardDoubleArrowUp, MdMailOutline } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] flex flex-col justify-center z px-20 py-16  text-white">
      <div className="flex flex-col items-center">
        <MdKeyboardDoubleArrowUp className="text-xl mb-5 font-bold text-center"></MdKeyboardDoubleArrowUp>
        <p className="uppercase text-xl font2">Back To Top</p>
      </div>
      <div className="flex justify-center text-3xl gap-5 my-5">
        <a href=""><AiOutlineFacebook></AiOutlineFacebook></a>
        <a href=""><ImGithub></ImGithub></a>
        <a href=""><AiOutlineLinkedin></AiOutlineLinkedin></a>
        <a href=""><MdMailOutline></MdMailOutline></a>
      </div>
      <p className="text-center my-5"><b>@Nadim Shahriar</b> All Rights Reserved</p>
    </div>
  );
};
