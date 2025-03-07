import React from 'react'
import ONash from '../homeComponent/ONash'

const VibrVas = () => {
    return (
        <div className="w-full bg-[#0F0F0F] pb-10 overflow-x-hidden">
            <div className="w-full max-w-[1250px] text-white flex flex-col mx-auto justify-center items-center">
                <h1 className='text-[40px] font-[600] mt-5'>Почему стоит выбрать нас?</h1>
                <div className='w-[134px] h-[2px] bg-[#D3176D] mt-5' />
                <p className='text-[16px] mt-5 font-[400]'>Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.</p>
                <p className='text-[16px] mt-5 font-[400]'>Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.</p>
                <div className='w-full flex justify-between items-center '>
                    <div className='bg-[#1A1A1A] w-[275px] h-[110px] flex justify-center items-center mt-10 text-center'>
                        <p>
                            съешь же ещё этих мягких французских булок, да выпей чаю съешь
                        </p>
                    </div>
                    <div className='bg-[#1A1A1A] w-[275px] h-[110px] flex justify-center items-center mt-10 text-center'>
                        <p>
                            съешь же ещё этих мягких французских булок, да выпей чаю съешь
                        </p>
                    </div>
                    <div className='bg-[#1A1A1A] w-[275px] h-[110px] flex justify-center items-center mt-10 text-center'>
                        <p>
                            съешь же ещё этих мягких французских булок, да выпей чаю съешь
                        </p>
                    </div>
                    <div className='bg-[#1A1A1A] w-[275px] h-[110px] flex justify-center items-center mt-10 text-center'>
                        <p>
                            съешь же ещё этих мягких французских булок, да выпей чаю съешь
                        </p>
                    </div>
                </div>
            </div>
            <ONash />
        </div>
    )
}

export default VibrVas
