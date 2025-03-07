import React from 'react'

const TopCard = ({ img, title, dis, data }) => {
  return (
    <div className=' w-full max-w-[505px] h-auto flex justify-between gap-4 items-center p-5 bg-[#000000] rounded-lg shadow-lg'>
      <img src={img} alt={title} className='w-[136px] h-[160px] object-contain' />
      <div className='text-start'>
        <h1 className='text-[20px] font-bold mb-2'>{title}</h1>
        <p className='text-gray-300 mb-3'>{dis}</p>
        <ul className='list-disc list-inside pl-2 text-gray-400'>
          {data.map((item, index) => (
            <li key={index} className='text-sm'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopCard
