import React from 'react';
import VibrVas from '../components/AboutComponents/VibrVas';
import Oplat from '../components/AboutComponents/Oplat';
import Garanti from '../components/AboutComponents/Garanti';
import Vapros from '../components/homeComponent/Vapros';
import Zakaz from '../components/homeComponent/Zakaz';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>InGame | Biz haqimizda</title>
        <meta name="description" content="INGAME – premium kompyuterlar ishlab chiqaruvchi kompaniya. NVIDIA, ASUS ROG, Cougar kabi kompaniyalar bilan hamkorlik qilamiz. O‘zbekiston va dunyo bo‘ylab yetkazib beramiz." />
        <meta name="keywords" content="kompyuter, gaming PC, InGame, O‘zbekiston, NVIDIA, ASUS ROG, premium kompyuterlar, yetkazib berish, kafolat" />
        <meta name="author" content="InGame" />
        <meta property="og:title" content="InGame | Biz haqimizda" />
        <meta property="og:description" content="Biz premium kompyuterlarni ishlab chiqaramiz va butun dunyoga yetkazib beramiz." />
        <meta property="og:image" content="https://i.pinimg.com/1200x/62/b0/a0/62b0a032b4d86127eaa200dc44dd59cb.jpg" />
        <meta property="og:url" content="https://ingame.uz/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="w-full bg-[#1A1A1A] pb-10 overflow-x-hidden">
        <div className="w-full max-w-[1250px] text-white flex flex-col mx-auto justify-center items-center">
          <div className="w-full text-start mt-5">
            <h1 className="text-[40px] font-[600]">О компании</h1>
            <p className="text-[16px] font-[400]">
              Компания INGAME была основана в 2017 году. Мы — официальный партнер таких известных технологических гигантов,
              как NVIDIA, ASUS ROG, Cougar, Huntkey. Главный офис INGAME и производственный центр расположены в Ташкенте.
              Шоурум с компьютерами и периферией находится также в Ташкенте. Мы осуществляем доставку компьютеров по всему
              Узбекистану и миру. Наша компания работает как с частными, так и с юридическими лицами.
            </p>
            <img
              src="https://i.pinimg.com/1200x/62/b0/a0/62b0a032b4d86127eaa200dc44dd59cb.jpg"
              alt="img"
              className="w-full h-[700px] mt-10 object-cover"
            />
          </div>

          {/* Про нас */}
          <div className="mt-10 text-center flex flex-col justify-center items-center w-full">
            <h1 className="text-[40px] font-[600]">Про нас</h1>
            <div className="w-[134px] mt-[15px] h-[2px] bg-[#D3176D]" />
            <div className="flex w-full mt-10">
              <div className="w-[30%] flex items-center justify-center">
                <img
                  src="https://i.pinimg.com/1200x/62/b0/a0/62b0a032b4d86127eaa200dc44dd59cb.jpg"
                  alt="img"
                  className="w-[300px] h-[300px] object-cover"
                />
              </div>
              <div className="w-[70%] text-start flex flex-col items-start justify-start gap-3">
                <p className='text-[16px] font-[500]'>Здравствуйте, я – Шахзод Шодиев,<br />
                  основатель компании inGame
                  <br />
                  <br />
                  Я прошел все этапы работы: сам продавал, собирал и доставлял компьютеры клиентам.<br />
                  Как никто другой знаю, как это делать правильно;<br />
                  За 7 лет работы мы построили компанию олдним из лучших производителей компьютеров премиум класса в Узбекистане;
                  <br />
                  <br />
                  За это время мы собрали мощную команду единомышленников,<br />
                  с которыми дружим и работаем с самого основания компании.
                </p>
                <div className='w-[820px] h-[127px] border-[1px] border-[#D3176D] bg-[#141414] p-3 text-start'>
                  <h1 className='text-[20px] font-[600]'>
                    Наша миссия
                  </h1>
                  <p className='text-[16px] font-[500]'>
                    Создавать лучшие компьютеры, которые будут дарить геймерам и творческим профессионалам удовольствие от использования. inGame это восхитительный дизайн, высокая производительность, безупречное качество и персональный сервис
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <VibrVas />
      <Oplat />
      <Garanti />
      <Vapros />
      <Zakaz />
    </>
  );
};

export default About;
