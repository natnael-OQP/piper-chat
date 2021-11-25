import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon,

} from '@heroicons/react/outline'

import {
    HeartIcon as HeartIconFilled
} from '@heroicons/react/solid'

const Post = ({userName, userImage, images, caption }) => {
    return (
        <div className=" bg-white py-1 mt-3 rounded-sm shadow-sm px-[5px] " >
            {/* Header */}
            <div className="w-full flex items-center justify-between  " >
                <div className="flex items-center  " >
                    <img className="w-12 h-12 rounded-full object-cover ring-1 ring-black " src={userImage} alt={userName} />
                    <h1 className="ml-4" >{userName}</h1>
                </div>
                <DotsHorizontalIcon className="postBtn" />
            </div>
            {/* Images */}
            <div className="" >
                <img className="w-full object-cover " src={images} alt={userName} />
            </div>
            {/* Button */}
            <div className="w-full flex items-center  justify-between p-2   " >
                <div className="flex items-center " >
                    <HeartIcon  className="postBtn" />
                    <ChatIcon className="postBtn" />
                    <PaperAirplaneIcon className="postBtn" />
                </div>
                <BookmarkIcon className="postBtn" />
            </div>
            {/* caption */}
            <p className="flex items-center p-[6px]  font-semibold text-gray-800 " >
                {userName+':'} {" "} <span className="text-gray-500 font-normal ml-1 italic ">{caption}</span>
            </p>
            {/* comment */}
            <div></div>
            {/* Input Filled */}
            <form className="flex items-center p-2 h-10  " >
                <EmojiHappyIcon className="postBtn w-6 h-6 " />
                <input className="shadow-sm text-sm font-medium rounded-md ring-green-300 border-none w-full outline-none py-[5px] px-[10px] focus:ring-1 text-gray-500 " type="text" placeholder="write your comment " />
                <button className="font-semibold text-blue-400 px-1 " type="submit" >post</button>
            </form>

        </div>
    )
}

export default Post
