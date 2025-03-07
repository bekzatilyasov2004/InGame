import React from 'react';
import { FaTelegram, FaInstagram } from "react-icons/fa";
import YandexMap from './YandexMap'; 
import { MdPhoneIphone } from "react-icons/md";
import { IoTimeOutline, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-[#131212] text-white py-10">
      <div className="w-full flex justify-between md:items-start items-center gap-5 max-w-[900px] md:flex-row flex-col p-2 text-white mx-auto">
        <div className='flex justify-around items-start gap-10'>
        <div className="flex flex-col justify-start gap-1 items-start">
          <h1 className="text-[14px] font-[600]">Контакты</h1>
          <div className="flex justify-start items-center gap-3">
            <MdPhoneIphone size="18px" />
            <h1 className="text-[14px] font-[500] text-[#777676]">номер</h1>
          </div>
          <div className="flex justify-start items-center gap-3">
            <IoTimeOutline size="18px" />
            <h1 className="text-[14px] font-[500] text-[#777676]">время работы</h1>
          </div>
          <div className="flex justify-start items-center gap-3">
            <IoLocationSharp size="18px" />
            <h1 className="text-[14px] font-[500] text-[#777676]">локация</h1>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-1 items-start">
          <h1 className="text-[14px] font-[600]">Наши соц. сети</h1>
          <div className="flex justify-start items-center gap-3">
            <FaInstagram size="18px" />
            <h1 className="text-[14px] font-[500] text-[#777676]">Instagram</h1>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaTelegram size="18px" />
            <h1 className="text-[14px] font-[500] text-[#777676]">Telegram</h1>
          </div>
        </div>
        </div>
        <div>
        <YandexMap />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
