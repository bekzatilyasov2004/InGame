import { MdDelete } from "react-icons/md";

const KorzinaCard = () => {
    return (
        <div className="w-full mt-5 flex flex-wrap gap-5  sm:items-center items-start">
            <div className="sm:w-[100px] sm:h-[100px] w-[80px] h-[80px] flex justify-center items-center bg-[#404040]">
                <img src="../mac.png" alt="tavar" className="sm:w-[70px] sm:h-[65px] w-[56px] h-[52px]" />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex sm:hidden text-[16px] font-[500]">
                    25 550 000 сум
                </div>
                <div className="w-[200px]">
                    <h1 className="text-[16px] font-[600]">Название товара</h1>
                    <p className="text-[14px] font-[400]">Доп. данные</p>
                </div>

                <div className="sm:text-center ">
                    <h1 className="text-[16px] font-[600]">Заказ</h1>
                    <p className="text-[14px] font-[400]">4-7 дней</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <button className="w-[25px] h-[30px] flex justify-center items-center text-[16px] font-[600] bg-[#262626]">-</button>
                        <span className="h-[30px] px-3 flex items-center bg-[#303030]">1</span>
                        <button className="w-[25px] h-[30px] flex justify-center items-center text-[16px] font-[600] bg-[#262626]">+</button>
                    </div>
                    <MdDelete size={24} className="text-[#FB6F6F] cursor-pointer" />
                </div>

                <div className="hidden sm:flex text-[16px] font-[500]">
                    25 550 000 сум
                </div>
            </div>
        </div>
    );
};

export default KorzinaCard;
