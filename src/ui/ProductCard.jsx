import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

const ProductCard = ({ product }) => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="w-[250px] flex flex-col justify-between h-[300px] md:h-[510px] md:w-[300px] bg-[#1e1e1e] p-4 min-w-[280px] min-h-[510px] rounded-lg shadow-lg">
      <div className="w-full flex justify-center items-start relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[164px] h-[251px] object-cover filter drop-shadow-lg"
        />
        <div onClick={toggleLike} className="absolute top-2 right-2 cursor-pointer">
          {like ? <FcLike size={30} /> : <FaRegHeart size={30} />}
        </div>
      </div>
      <h2 className="text-[16px] md:text-[22px] font-semibold mt-4">{product.name}</h2>
      <p className="text-[14px] text-gray-300">{product.brand}</p>
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-[15px] md:text-[20px] font-bold">${product.price}</h1>
        <span className="px-2 py-1 text-xs font-semibold bg-gray-700 rounded-md">{product.type}</span>
      </div>
      <button className="w-full h-[36px] md:h-[39px] bg-[#D3176D] text-white font-bold rounded-md mt-4">
        Купить
      </button>
    </div>
  );
};

export default ProductCard;
