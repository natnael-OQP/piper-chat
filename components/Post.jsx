import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon,

} from '@heroicons/react/outline'

import {
    HeartIcon as HeartIconFilled
} from '@heroicons/react/solid'

const Post = ({userName, userImage, images, caption }) => {
    return (
        <div className=" bg-white py-1 mt-3 rounded-sm shadow-sm " >
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
            <div className="flex items-center justify-between p-2  " >
                <div>
                    <HeartIcon  className="postBtn" />
                    <ChatIcon className="postBtn" />
                    <PaperAirplaneIcon className="postBtn" />
                </div>
                <BookmarkIcon/>
            </div>
            {/* caption */}
            <div>
                <h2>adfkds</h2>
            </div>
            {/* comment */}
            <div></div>
            {/* Input Filled */}
            <div></div>

        </div>
    )
}

export default Post
