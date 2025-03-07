const UslugiHero = () => {
    return (
        <div className="w-full bg-[#000000]">
            <div className="w-full h-[700px] flex justify-between  items-center max-w-[1250px] text-white mx-auto">
                <div className="flex mb-[200px] max-w-[600px] flex-col justify-start items-start gap-5">
                    <h1 className="text-[60px] font-[500]">Название услуги</h1>
                    <p className="text-[16px] font-[500]">
                        съешь же ещё этих мягких французских булок, да выпей чаю съешь
                        же ещё этих мягких французских булок, да выпей чаю
                        съешь же ещё этих мягких
                        французских булок, да выпей чаю
                    </p>
                    <p className="text-[16px] font-[500]">
                        съешь же ещё этих мягких французских булок, да выпей чаю съешь
                        же ещё этих мягких французских булок, да выпей чаю
                        съешь же ещё этих мягких
                        французских булок, да выпей чаю
                    </p>
                    <button className="relative w-[279px] h-[60px] text-[25px] font-[600] border-[3px] border-[#D3176D] overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105">
                        <span className="relative z-10">Заказать апгрейд</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#D3176D] to-[#ff4b8b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </button>
                </div>
                <div className="mb-[200px]">
                    <img
                        src="usl.png"
                        alt="uslugi"
                        className="w-[626px] h-[397px] filter drop-shadow-[0_1px_30px_rgba(255,255,255,0.3)]"
                    />
                </div>
            </div>
        </div>
    );
}

export default UslugiHero;
