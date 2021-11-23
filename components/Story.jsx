import React from 'react'
import Image from 'next/image'
const Story = ({photo,userName}) => {
    return (
        <div className="flex flex-col " >
            {/* */}
            <div className=" w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full hover:ring-offset-2 ring-2 ring-offset-1 ring-green-500 relative overflow-hidden hover:scale-110  transition-all ease-linear duration-200 cursor-pointer transform   " >
                <Image layout="fill" objectFit="contain"  src={photo} alt={userName} /> 
            </div>
            <h1 className="w-14 text-xs font-bold text-gray-600 pt-[2.2px] truncate text-center font-sans ">{userName}</h1>
        </div>
    )
}

export default Story
