import React from 'react';
import KorzinaCard from '../../ui/KorzinaCard';

const Korzina = () => {
  return (
    <div className="w-full bg-[#1a1a1a] relative">
      <div className="w-full max-w-[1250px] sm:p-10 p-5 flex md:flex-row flex-col gap-4 justify-start text-white mx-auto relative">
        <div className='w-full flex flex-col justify-start items-start'>
          <h1 className='text-[20px] mb-2 font-[600] sm:hidden block'>Корзина</h1>
          
          <div className='w-full hidden sm:flex px-[5%] h-[41px] justify-between items-center bg-[#2D2D2D]'>
            <h1 className='text-[16px] font-[600] flex-1 text-left'>Товар</h1>
            <div className='flex-1 flex justify-around items-center gap-[15%] lg:gap-[20%] xl:gap-[25%]'>
              <h1 className='text-[16px] font-[600] text-center'>Наличие</h1>
              <h1 className='text-[16px] font-[600] text-center'>Количество</h1>
              <h1 className='text-[16px] font-[600] text-right'>Цена</h1>
            </div>
          </div>

          <div className='w-full min-h-[400px] flex flex-col gap-4 sm:gap-5'>
            <KorzinaCard />
            <KorzinaCard />
            <KorzinaCard />
          </div>

          <div className='mt-5 flex flex-col sm:flex-row items-start justify-start gap-3 w-full'>
            <div className='flex gap-3 p-3 h-[40px] w-full sm:max-w-[300px] bg-[#272727] justify-center items-center'>
              <h1 className='text-[15px] font-[600]'>Промокод</h1>
              <input type='text' className='flex-1 text-[16px] font-[500] uppercase outline-none border-b-[1px] border-[#848484] bg-transparent' required />
            </div>
            <button type='submit' className='w-full sm:w-[120px] h-[40px] hover:bg-[#BD1863] transition-all hover:animate-pulse border-[3px] text-[14px] font-[600] border-[#BD1863]'>Применить</button>
          </div>
        </div>

        {/* Order Summary */}
        <div className='w-full sm:w-full md:w-[500px] xl:w-[500px] mt-5 sm:mt-0 sm:sticky sm:top-[50px] h-[158px] flex flex-col justify-between p-5 bg-[#121212]'>
          <div className='flex justify-start items-center'>
            <h1 className='text-[18px] font-[700]'>Итого:</h1>
            <span className='flex-1 border-dotted border-b-[5px] border-white mx-2'></span>
            <h1 className='text-[20px] font-[600]'>22 343 444 сум</h1>
          </div>
          <div className='w-full flex sm:hidden justify-end items-center text-[14px] font-[400]'>
            1 товар
          </div>
          <button className='w-full animate-pulse h-[50px] text-[18px] font-[700] bg-[#D3176D]'>Продолжить</button>
        </div>
      </div>
    </div>
  );
};

export default Korzina;
