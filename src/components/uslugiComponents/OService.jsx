import React from 'react'

const OService = () => {
    return (
        <div className="w-full bg-[#1A1A1A]">
            <div className="w-full h-[553px] flex justify-center items-center gap-10 max-w-[1250px] text-white mx-auto">
                <div className='flex justify-around items-center gap-5'>
                    <img src='../oservice.png' alt="OService" className='w-[592px] h-[353px] ' />
                </div>
                <div className='flex flex-col justify-start items-start w-full max-w-[535px]'>
                    <h1 className='text-[30px] font-[600]'>О сервисе <span className='orbitron'>Ingame</span></h1>
                    <p className='text-[16px] font-[500]'>
                    Мы занимаемся компьютерами более 13 лет и уже наизусть выучили их устройство. Наши специалисты с многолетним опытом проведут комплексную диагностику вашего ПК на высшем уровне: почистят, исправят неполадки в работе комплектующих и программ, устранят вирусы и ненужные файлы, проведут специальные тесты и предоставят вам лист отчета по окончании обслуживания.
                    </p >
                    <div className=' w-full flex justify-between items-center' >
                        <div className='flex3 flex-col justify-center text-center items-center gap-3'>
                            <h1 className='text-[30px] font-[600]'>2324</h1>
                            <p className='text-[16px] font-[500]'>проведенных ТО</p>
                        </div>
                        <div className='flex3 flex-col justify-center text-center items-center gap-3'>
                            <h1 className='text-[30px] font-[600]'>1 год</h1>
                            <p className='text-[16px] font-[500]'>гарантия на работы</p>
                        </div>
                        <div className='flex3 p-4 flex-col justify-center text-center items-center gap-3'>
                            <h1 className='text-[30px] font-[600]'>23</h1>
                            <p className='text-[16px] font-[500]'>специалистов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OService
