import React from 'react'
import TopCard from '../../ui/TopCard'

const obj = [
    {
        img: './pic/1.png',
        title: 'Увеличить мощность',
        dis: 'Подберем наиболее оптимальные комплектующие под задачи вашего ПК',
        ul: [
            'обновим видеокарту',
            'подберем новый процессор и материнскую плату',
            'увеличим объём оперативной памяти',
            'улучшим систему охлаждения компьютера'
        ]
    },
    {
        img: './pic/2.png',
        title: 'Ускорить загрузку',
        dis: 'Заменим жесткий диск на SSD для более быстрой работы',
        ul: [
            'установим SSD накопитель',
            'оптимизируем систему',
            'обновим BIOS для лучшей совместимости'
        ]
    },
    {
        img: './pic/3.png',
        title: 'Настроить систему',
        dis: 'Оптимизируем вашу операционную систему для максимальной производительности',
        ul: [
            'очистим от ненужных программ',
            'настроим автозапуск',
            'оптимизируем настройки питания'
        ]
    },
    {
        img: './pic/4.png',
        title: 'Обеспечить защиту',
        dis: 'Настроим антивирус и защиту данных',
        ul: [
            'установим антивирусное ПО',
            'настроим firewall',
            'обучим безопасному использованию сети'
        ]
    }
]

const OstalCard = () => {
    return (
        <div className="w-full bg-[#1A1A1A] py-16 px-4">
            <div className="max-w-[1250px] mx-auto text-white text-center relative">
                <div className="flex justify-center absolute mt-[-250px] w-full">
                    <img src='wrap.png' alt='wrap' className='w-[202px] h-[233px]' />
                    <img src='wrap.png' alt='wrap' className='w-[202px] h-[233px]' />
                    <img src='wrap.png' alt='wrap' className='w-[202px] h-[233px]' />
                    <img src='wrap.png' alt='wrap' className='w-[202px] h-[233px]' />
                </div>

                <h1 className='text-[40px] mt-[80px] font-[600] mb-10'>Что мы можем лучше остальных?</h1>

                <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {obj.map((item, index) => (
                        <TopCard 
                            key={index} 
                            img={item.img} 
                            title={item.title} 
                            dis={item.dis} 
                            data={item.ul}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OstalCard
