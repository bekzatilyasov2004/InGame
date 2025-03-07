import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const CustomRate = ({ defaultValue }) => {
  const [rating, setRating] = useState(defaultValue);

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <FaStar
            key={index}
            className="cursor-pointer transition-all"
            fill={currentRating <= rating ? '#D3176D' : "transparent"} 
            stroke={'#D3176D'} 
            strokeWidth={10} 
            onClick={() => setRating(currentRating)}
            size={window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 25 : 30} // Ekran o'lchamiga qarab moslashadi
          />
        );
      })}
    </div>
  );
};

export default CustomRate;
