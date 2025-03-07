import React, { useState } from "react";
import ONashCard from "../../ui/ONashCard";
import { FaArrowRight } from "react-icons/fa";

const ONash = () => {
  const clients = [
    {
      name: "Давронбек Турсунов",
      profession: "Frontend Developer",
      quote: "Сайтни yaratish juda oson bo‘ldi!",
      image: "boy.png",
      playImage: "play.png",
    },
    {
      name: "Шахло Содиковна",
      profession: "UI/UX Designer",
      quote: "Tez va oson interfeys dizayni yaratdim.",
      image: "girl.png",
      playImage: "play.png",
    },
    {
      name: "Муродбек Рахимов",
      profession: "Backend Developer",
      quote: "Backend dasturini samarali yaratish menga yordam berdi.",
      image: "boy.png",
      playImage: "play.png",
    },
    {
      name: "Юлдузбек Мухамедов",
      profession: "Product Manager",
      quote: "Biznesni muvaffaqiyatli boshqarish uchun yaxshi imkoniyat yaratdim.",
      image: "boy.png",
      playImage: "play.png",
    },
    {
      name: "Алишер Исламov",
      profession: "Mobile Developer",
      quote: "Mobil ilova ishlab chiqishda juda yaxshi tajriba orttirdim.",
      image: "boy.png",
      playImage: "play.png",
    },
    {
      name: "Рано Саидova",
      profession: "Digital Marketer",
      quote: "Marketing strategiyalarini yaratishda muvaffaqiyat qozondim.",
      image: "girl.png",
      playImage: "play.png",
    },
    {
      name: "Тимурбек Умарov",
      profession: "Data Analyst",
      quote: "Ma'lumotlarni tahlil qilishda tez va aniq natijalar olishni o‘rgandim.",
      image: "boy.png",
      playImage: "play.png",
    },
    {
      name: "Гульнара Ахмедova",
      profession: "DevOps Engineer",
      quote: "Cloud platformalarda ishlash tajribamni oshirdim.",
      image: "girl.png",
      playImage: "play.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
    scrollToActive();
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
    );
    scrollToActive();
  };

  const scrollToActive = () => {
    const clientContainer = document.getElementById("client-container");
    const activeClient = document.getElementById(`client-${activeIndex}`);
    clientContainer.scrollTo({
      left: activeClient.offsetLeft - clientContainer.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[#0F0F0F] pb-10 overflow-x-hidden">
      <div className="w-full max-w-[1250px] text-white mx-auto">
        <div className="w-full p-5">
          <h1 className="font-[600] text-center mb-5 text-[18px] md:text-[40px]">
            Почему стоит выбрать нас?
          </h1>
          <p className="md:text-[22px] text-center font-[500] text-[12px]">
            Об этом лучше всего расскажут сами наши клиенты!
          </p>
          <div className="w-full flex justify-center items-center">
          <div className='w-[134px] h-[2px] bg-[#D3176D] mt-5 mb-5' />
          </div>
          <div className="mt-10 relative">
            <div className="flex space-x-5 w-full">
              <div
                id="client-container"
                className="w-full flex gap-5 overflow-x-auto justify-start hide-scrollbar"
              >
                {clients.map((client, index) => (
                  <div id={`client-${index}`} key={index}>
                    <ONashCard
                      name={client.name}
                      profession={client.profession}
                      quote={client.quote}
                      image={client.image}
                      playImage={client.playImage}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 z-50 left-0 transform -translate-y-1/2 text-white cursor-pointer w-12 h-12 bg-[#00000070] rounded-full flex justify-center items-center" style={{ marginLeft: '10px' }}>
              <button onClick={handlePrev}>
                <FaArrowRight className="rotate-180 text-[24px]" />
              </button>
            </div>
            <div className="absolute z-50 top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer w-12 h-12 bg-[#00000070] rounded-full flex justify-center items-center" style={{ marginRight: '10px' }}>
              <button onClick={handleNext}>
                <FaArrowRight className="text-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ONash;
