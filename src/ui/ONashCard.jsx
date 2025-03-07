import React from "react";

const ONashCard = ({ name, profession, quote, image, playImage }) => {
  return (
    <div className="md:w-[300px] w-[250px] relative md:min-w-[300px] min-w-[250px] flex flex-col justify-between items-center">
      <div className="md:w-[260px] w-[211px] absolute mr-2 md:mr-10 z-50 h-[96px] p-3 bg-[#BD1863] flex flex-col">
        <h2 className="text-[16px] font-[600]">{quote}</h2>
        <img
          src="comma.png"
          alt="comma"
          className="w-[33.6px] h-[24px] absolute ml-[150px] md:ml-[220px] mt-[70px]"
        />
      </div>

      <div className="relative">
        <img
          src={image}
          alt={name}
          className="md:w-[261px] md:h-[512px] w-[186px] h-[364px] mt-10  rounded-3xl"
        />
        <div className="absolute top-0 left-0 w-full p-2 h-full flex flex-col justify-end items-start text-white z-10">
          <div className="flex justify-between mb-2 items-center w-full">
            <div>
              <h1 className="text-[16px] font-[700]">{name}</h1>
              <p className="text-[13px] font-[400]">{profession}</p>
            </div>
            <img
              src={playImage}
              alt="play"
              className="w-[40px] h-[40px] mb-5 cursor-pointer"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b rounded-3xl from-transparent to-black opacity-40"></div>
      </div>
    </div>
  );
};

export default ONashCard;
