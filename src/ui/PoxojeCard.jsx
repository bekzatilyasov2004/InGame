import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const PoxojeCard = ({ naz, title, image }) => {
  const formattedTitle =
    typeof title === "number" ? title.toLocaleString("ru-RU") : title;

  const [like, setLike] = useState(false);

  return (
    <div className="min-w-[250px] h-[280px] bg-[#2a2a2a] rounded-lg flex flex-col items-center p-3 shadow-md relative">
      <div 
        className="absolute top-2 right-2 cursor-pointer" 
        onClick={() => setLike(!like)}
      >
        {like ? <FcLike size={28} /> : <FcLikePlaceholder size={28} />}
      </div>

      <img
        src={image}
        alt={naz}
        className="w-[150px] h-[120px] object-cover rounded-md shadow-md"
      />

      <div className="mt-4 text-white text-center">
        <p className="text-[14px] font-medium">{naz}</p>
        <h3 className="text-[16px] font-semibold">{formattedTitle} Сум</h3>
      </div>
    </div>
  );
};

export default PoxojeCard;
