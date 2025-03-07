import { Carousel } from 'antd';
import './Carusel.css';

const HomeHero = () => {
  return (
    <div className="w-full relative p-5 bg-black">
      <img
        src="/shadow.png"
        alt="shadow"
        className="absolute bottom-0 right-0 z-[0] w-[80%] max-w-[1000px] h-auto opacity-50"
      />
      <div className="w-full h-[472px] md:h-[660px] max-w-[1250px] mx-auto relative z-10">
        <Carousel dots={false} arrows  autoplay autoplaySpeed={3000} effect="scrollx" className="custom-carousel">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="custom-slide flex flex-col-reverse justify-center md:flex-row w-full h-full items-center text-white gap-6 md:gap-10">
              <div className="flex flex-col justify-center space-y-4 md:space-y-6 md:w-1/2 text-center md:text-left">
                <h1 className="orbitron text-[25px] md:text-[60px] font-[600]">NVIDIA RTX SUPER</h1>
                <p className="text-[14px] md:text-[22px] font-[500]">
                  Новые игровые видеокарты NVIDIA GeForce RTX 4070 Super, 4070 Ti и 4080 доступны к заказу!
                </p>
                <p className="text-[14px] md:text-[22px] font-[500]">
                  Будь среди первых и протестируй новые возможности.
                </p>
                <button className="md:self-start self-center w-[100px] h-[40px] text-[16px] md:w-[200px] md:h-[60px] md:text-[20px] font-[600] border hover:text-[#D3176D] hover:border-[#D3176D] cursor-pointer transition-all duration-500 ease-in-out">
                  Подробнее
                </button>
              </div>
              <div className="flex justify-center md:w-1/2">
                <img src="/mono.png" alt="monoblock" className="w-[250px] md:w-[90%] lg:w-[812px] h-auto" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeHero;
