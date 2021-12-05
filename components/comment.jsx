import React, { forwardRef } from 'react';
import Moment from 'react-moment';

const Comment = forwardRef(({ profilePic, username, message, timeStamp },ref) => {
    return (
        <div ref={ref} className="flex flex-col w-full mb-3 rounded-md bg-gray-50 p-1 shadow-sm " >
            <div className="flex items-center w-full relative  " >
                <img className=" m-1 w-8 h-8 rounded-full object-contain ring-1 ring-black " src={profilePic} alt={username}/>
                <h1 className="ml-2 text-sm font-bold text-gray-600 " >{username}</h1>
                <span className="absolute top-2 right-2 text-gray-400 text-xs font-semibold ">
                    <Moment fromNow >{timeStamp?.toDate()}</Moment>
                </span>
            </div>
            <p className="w-full pb-1 pl-4 pr-[6px] pt-1 text-xs font-semibold text-gray-500 text-left "  >{message}</p>
        </div>
    )
})

export default Comment;
