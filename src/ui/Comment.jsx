import React from "react";

const Comment = ({ avatar, name, rating, comment }) => {
    return (
        <div className="bg-[#050505] p-4 border-[3px] border-white flex justify-center items-center shadow-lg text-white w-full min-w-[280px] md:min-w-[400px] h-auto md:h-[192px] rounded-lg">
            <div className="flex items-center gap-3">
                <img src={avatar} alt={name} className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-md border-[2px] border-[#D3176D]" />
                <div className="flex flex-col items-start text-start">
                    <h3 className="text-sm md:text-lg font-semibold">{name}</h3>
                    <p className="text-xs md:text-sm text-gray-300">{comment}</p>
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span key={index} style={{ fontSize: '18px' }} className={index < rating ? "text-[#D3176D]" : "text-gray-500"}>
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
