import React from 'react'
import { motion } from 'framer-motion'
import { IoSearchOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'

const SearchHero = ({serch, setSerch}) => {
    
    return (
        <div>
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute bg-[#D3176D] w-full flex justify-center items-start inset-0 top-[80px] z-50 bg-opacity-0"
            >
                <div className="bg-[#D3176D] text-white p-6 rounded-b-md w-full h-[52px]  flex justify-center items-center ">
                    <div className='w-full max-w-[739px] flex gap-3 justify-around items-center'>
                        <input className='w-full max-w-[668px] h-[32px] p-2 bg-[#1a1a1a]' />
                        <IoSearchOutline  size={24} className='text-[#1a1a1a] cursor-pointer' />
                        <IoMdClose onClick={()=> setSerch(!serch)} size={24} className='text-[#1a1a1a] cursor-pointer' />
                    </div>
                </div>
            </motion.div>
        </div>




    )
}

export default SearchHero
