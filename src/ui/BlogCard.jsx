import React from 'react';

const BlogCard = ({ image, date, title, description }) => {
  return (
    <div className="bg-[#0F0F0F] relative  rounded-lg shadow-md">
      <div>
        <img src={image} alt="Blog" className=" w-full h-[280px] object-cover rounded-md" />
        <div className=" absolute md:top-[50%] top-[53%] left-[9%] z-50 md:left-[9%]  p-2  border border-white bg-[#D3176D] font-[600]  text-white text-xs md:text-sm ">
          {date}
        </div>
      </div>
      <div className="mt-4 p-4">
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-2 text-sm md:text-base">{description}</p>
        <a href="#" className="text-[#D3176D] mt-4 block text-sm md:text-base hover:underline">
          Читать дальше
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
