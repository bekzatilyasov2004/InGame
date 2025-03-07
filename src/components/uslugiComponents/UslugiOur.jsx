import React from 'react';
import { IoMdTime } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import { PiChartLineDownLight } from "react-icons/pi";
import { CiWarning } from "react-icons/ci";
import { FaMoneyBill1 } from "react-icons/fa6";
import { CiTempHigh } from "react-icons/ci";

const arr = [
    { img: '../img.png', text: 'Риск поражения током' },
    { img: '../img1.png', text: 'Потеря важных данных' },
    { img: '../img2.png', text: 'Потеря времени' },
    { img: '../img3.png', text: 'Непредвиденные траты' }
];

const UslugiOur = () => {
    return (
        <div className="w-full bg-[#1a1a1a] pb-10 overflow-x-hidden">
            <div className="w-full max-w-[1250px] text-white mx-auto">
                <div className="w-full mx-auto max-w-[1100px] p-5">
                    <h1 className="font-[600] text-center mb-5 text-[18px] md:text-[40px]">
                        Забота о вашем компьютере
                    </h1>
                    <p className="md:text-[22px] text-center font-[500] text-[12px]">
                        Компьютер, так же, как и любая другая машина, нуждается в регулярном техническом обслуживании.
                        Это залог стабильной, эффективной и долгой работы всей системы. Не стоит пренебрегать состоянием своего ПК,
                        так как это может привести к необратимым последствиям.
                    </p>
                    <div className="w-[134px] mt-5 h-[2px] mx-auto bg-[#D3176D]" />
                </div>
                <div className='flex justify-start gap-10 items-start'>
                    <div>
                        <img src='../nout.png' alt='noutbuk' className='w-[480px] h-[430px]' />
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-10'>
                        <div className='flex justify-start w-full max-w-[300px] items-center gap-3'>
                            <IoMdTime size={'44px'} className='text-[#D3176D]' />
                            <h1 className='text-[16px] font-[500]'>Сокращение срока службы ПК</h1>
                        </div>
                        <div className='flex justify-start w-full max-w-[300px] items-center gap-3'>
                            <BsBagCheck size={'44px'} className='text-[#D3176D]' />
                            <h1 className='text-[16px] font-[500]'>Потеря ценных данных из-за вирусных программ</h1>
                        </div>
                        <div className='flex justify-start w-full max-w-[300px] items-center gap-3'>
                            <PiChartLineDownLight size={'44px'} className='text-[#D3176D]' />
                            <h1 className='text-[16px] font-[500]'>Снижение работоспособности компьютера</h1>
                        </div>
                        <div className='flex justify-start w-full max-w-[300px] items-center gap-3'>
                            <CiWarning size={'44px'} className='text-[#D3176D]' />
                            <h1 className='text-[16px] font-[500]'>Короткое замыкание</h1>
                        </div>
                        <div className='flex justify-start w-full max-w-[300px] items-center gap-3'>
                            <FaMoneyBill1 size={'44px'} className='text-[#D3176D]' />
                            <h1 className='text-[16px] font-[500]'>Дорогостоящий ремонт</h1>
                        </div>
                        <div className='flex justify-start w-full max-w-[300px] items-center gap-3'>
                            <CiTempHigh size={'44px'} className='text-[#D3176D]' />
                            <h1 className='text-[16px] font-[500]'>Перегрев и поломка комплектующих</h1>
                        </div>
                    </div>
                </div>

                <div className='flex mt-10 text-center flex-col gap-5 justify-start items-center'>
                    <h1 className='text-[30px] font-[600]'>Проблемы, возникающие при самостоятельном ремонте</h1>
                    <div className='w-[134px] h-[2px] bg-[#D3176D]'></div>
                </div>

                <div className="flex justify-center items-center gap-[50px] mt-10 flex-wrap">
                    {arr.map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-5 text-center bg-black rounded-lg w-full max-w-[255px] h-auto">
                            <img src={item.img} alt={item.text} className="w-full max-w-[215px] h-auto mb-3 object-cover" />
                            <h2 className="text-[16px] font-[500] text-white">{item.text}</h2>
                        </div>
                    ))}
                </div> 

            </div>
        </div>
    );
}

export default UslugiOur;
