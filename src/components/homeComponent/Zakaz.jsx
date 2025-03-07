import { MdElectricBolt } from "react-icons/md";

const Zakaz = () => {
    return (
        <div className="w-full bg-[#1A1A1A]  h-[513px]  overflow-x-hidden">
            <div className="w-full max-w-[1250px] mt-10  text-white bg-[#0F0F0F] mx-auto relative">
                <div className="w-full p-10">
                    <div className="w-full text-center flex justify-around items-center flex-col gap-5 max-w-[900px] mx-auto">
                        <h1 className="font-[600] text-center mb-5 text-[18px] md:text-[38px]">
                            Одним онлайн-звонком мы изменим ваш игровой опыт навсегда
                        </h1>
                        <p className="md:text-[18px] text-center font-[400] text-[12px] mb-[30px]">
                            Об этом лучше всего расскажут сами наши клиенты! Назначим звонок, узнаем о ваших запросах, предложим подходящую конфигурацию.
                            После разбора мы возьмем на себя все заботы по поддержке и дальнейшей доставке и сбору ПК
                        </p>
                        <a href="tel:+998938242704" className="flex w-[246px] mb-[40px] text-[20px] font-[600] h-[52px] bg-[#D3176D] border-[1px] border-black justify-center items-center gap-2 ">
                            <MdElectricBolt className="text-black" />
                            Заказать звонок
                        </a>
                    </div>

                    <img
                        src="../block.png"
                        alt="block"
                        className="w-[397px] h-[184px] drop-shadow-[0px_0px_50px_rgba(211,23,109,0.7)] absolute bottom-0 right-0 mr-10 mb-10"
                    />

                </div>
            </div>
        </div>
    );
}

export default Zakaz;
