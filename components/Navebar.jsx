import React from 'react'
import Image from 'next/image'
const NaveBar = () => {
    return (
        <div className="w-full bg-white shadow-sm h-14 " >
            {/* Wrapper */}
            <div className="flex items-center h-full  justify-between max-w-5xl mx-auto " >
                {/* left */}
                <div className=" h-10 w-20 bg-gray-200 " >
                    <Image layout="fill" objectFit="contain" src="" />
                </div>
                {/* meddle */}
                <div>
                    <h1>left</h1>
                </div>
                {/* right */}
                <div>
                    <h1>left</h1>
                </div>
            </div>
        </div>
    )
}
export default NaveBar;