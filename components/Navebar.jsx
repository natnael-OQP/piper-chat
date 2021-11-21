import React from 'react'
import Image from 'next/image'

import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HeartIcon,
} from '@heroicons/react/outline'

const NaveBar = () => {
    return (
        <div className="w-full bg-white shadow-sm h-14 " >
            {/* Wrapper */}
            <div className="flex items-center h-full px-2 justify-between max-w-5xl mx-auto " >
                {/* large logo */}
                <div className="hidden md:inline-block h-14 w-28  relative " >
                    <Image layout="fill" objectFit="contain" src="https://seeklogo.com/images/P/pied-piper-logo-254DAE7636-seeklogo.com.png" />
                </div>
                {/* small logo  */}
                <div className="flex-shrink-0 md:hidden h-8 w-8  relative " >
                    <Image layout="fill" objectFit="contain" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png" />
                </div>
                {/* meddle */}
                <div className="bg-gray-200 w-56 pr-2 cursor-pointer transform transition-all md:w-72 hover:border-2 hover: border-gray-900 lg:w-96 h-9 rounded-md pl-2 overflow-hidden  flex items-center shadow-sm hover:shadow-md " >
                    <SearchIcon className="w-5 h-5 text-gray-500 " />
                    <input className="   pl-3 w-full h-full bg-transparent  text-gray-600 font-medium text-sm md:text-base  outline-none  " placeholder="search..." type="search" />
                </div>
                {/* right */}
                <div className="flex items-center " >
                    <PlusCircleIcon className=" mr-2 w-5 h-5 cursor-pointer text-gray-400  " />
                    <UserGroupIcon className=" mr-2 w-5 h-5 cursor-pointer text-gray-400  " />
                    <PaperAirplaneIcon className=" mr-2 w-5 h-5 cursor-pointer text-gray-400  " />
                    <MenuIcon className=" mr-2 w-5 h-5 cursor-pointer text-gray-400  " />
                    <HeartIcon className=" mr-2 w-5 h-5 cursor-pointer text-gray-400  " />
                </div>
            </div>
        </div>
    )
}
export default NaveBar;