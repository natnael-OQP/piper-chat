import React from 'react'
import {
    DotsHorizontalIcon
} from '@heroicons/react/outline'

const Post = ({userName, userImage, images, caption }) => {
    return (
        <div className=" bg-white py-1 mt-3 rounded-sm shadow-sm " >
            {/* Header */}
            <div className="w-full flex items-center justify-between  " >
                <div className="flex items-center  " >
                    <img className="w-12 h-12 rounded-full object-cover ring-1 ring-black " src={userImage} alt={userName} />
                    <h1 className="ml-4" >{userName}</h1>
                </div>
                <DotsHorizontalIcon className=" mr-3 w-6 h-6 cursor-pointer text-gray-700 hover:scale-110 transition-all ease-linear duration-100 " />
            </div>
            {/* Images */}
            <div className="" >
                <img className="w-full object-contain " src={images} alt={userName} />
            </div>
            {/* Button */}
            <div>
                <h1>hello </h1>
            </div>
            {/* caption */}
            <div>
            
            </div>
            {/* comment */}
            <div>
            
            </div>
        </div>
    )
}

export default Post
