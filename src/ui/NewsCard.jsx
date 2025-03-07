import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

const NewsCard = ({ product }) => {
  const [like, setLike] = useState(true);

  const change = () => {
    setLike(!like);
  };

  return (
    <div className="w-[250px] flex flex-col justify-between h-[300px] md:h-[510px] md:w-[300px] bg-[#1e1e1e] p-4 min-w-[280px] min-h-[510px]">
      <div className="w-full flex justify-center items-start">
        <img
          src={product.img}
          style={{
            filter: "drop-shadow(0px 0px 30px rgba(225,225,225,0.3))",
          }}
          alt={product.name}
          className="w-[164px] h-[251px] object-cover"
        />
        <div onClick={change}>
          {like ? <FaRegHeart size={30} /> : <FcLike size={30} />}
        </div>
      </div>
      <h2 className="text-[16px] md:text-[22px] font-semibold mt-4">{product.name}</h2>
      <div className="flex justify-between flex-col items-start mt-4">
        <h1 className="text-[15px] line-through md:text-[20px] ">{product.price}</h1>
        <h1 className="text-[16px] md:text-[22px] font-[600] text-[#D3176D]">{product.aksya}</h1>
      </div>
      <p className="text-[12px] md:text-[18px] text-gray-400 line-clamp-2 md:line-clamp-3">
        {product.info}
      </p>
      <div className="flex items-center md:items-end justify-between md:justify-end gap-3">
        <button className="w-[195px] h-[36px] md:w-[90px] md:h-[39px] bg-[#D3176D] ">Купить</button>
        <div className="flex justify-center items-center rounded-sm border border-white w-[36px] h-[36px] md:w-[39px] md:h-[39px]">
          <img src="/card.png" alt="card" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
