import React from 'react'
import Image from 'next/image'
const Story = ({photo,userName}) => {
    return (
        <div className="flex flex-col " >
            {/* */}
            <div className="w-14 h-14 rounded-full ring-2 ring-offset-1 ring-green-500 relative overflow-hidden hover:scale-105  transition-all ease-linear duration-200 cursor-pointer transform   " >
                <Image layout="fill" objectFit="contain"  src={photo} alt={userName} /> 
            </div>
            <h1 className="w-14 text-xs font-bold text-gray-600 pt-[2.2px] truncate text-center font-sans ">{userName}</h1>
        </div>
    )
}

export default Story
