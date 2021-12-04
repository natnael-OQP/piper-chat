import React from 'react'
import Image from 'next/image'
import { useSession, signOut,signIn, getProviders } from "next-auth/react"

import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HeartIcon,
    HomeIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {modelState} from '../atoms/modelAtom'


const NaveBar = () => {
    const {data: session} = useSession();
    const router = useRouter();
    // model global state
    let [open, setOpen] = useRecoilState(modelState);
    // toggle 
    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div className="w-full bg-white shadow-sm h-14 border-b sticky top-0 z-50 " >
            {/* Wrapper */}
            <div className="flex items-center h-full px-2 justify-between max-w-5xl mx-auto " >
                {/* large logo */}
                <div className="hidden md:inline-block h-14 w-28 mr-1 relative " >
                    <Image  
                        onClick={()=> router.push('/') }
                        layout="fill" objectFit="contain" src="https://seeklogo.com/images/P/pied-piper-logo-254DAE7636-seeklogo.com.png" />
                </div>
                {/* small logo  */}
                <div className="flex-shrink-0 md:hidden h-8 w-8 mr-1 relative " >
                    <Image
                        onClick={()=> router.push('/') } 
                        layout="fill" objectFit="contain" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png" />
                </div>
                {/* meddle */}
                <div className="bg-gray-200 w-56 hover:w-60  pr-2 cursor-pointer transform transition-all md:w-72 md:hover:w-80 hover:border-2 hover: border-gray-900 lg:w-96 lg:hover:w-[420px] h-9 rounded-md pl-2 overflow-hidden  flex items-center shadow-sm hover:shadow-md " >
                    <SearchIcon className="w-5 h-5 text-gray-500 " />
                    <input className="   pl-3 w-full h-full bg-transparent  text-gray-400 font-medium text-sm md:text-base  outline-none  " placeholder="search..." type="search" />
                </div>
                {/* right */}
                <div className="flex items-center " >
                    <HomeIcon
                        onClick={()=> router.push('/') }
                        className="navIcon" />
                    
                    {
                        session ? (
                            <>
                                <div className="relative navIcon " >
                                    <PaperAirplaneIcon className="navIcon rotate-45 " />
                                    <span className="absolute -top-1 -right-2 w-5 h-5  flex items-center justify-center rounded-full bg-red-500 animate-bounce text-white  " >1</span>
                                </div>
                                <PlusCircleIcon
                                    onClick={toggle}
                                    className="ml-1 sm:mr-2 w-6 h-6 cursor-pointer text-gray-700 hover:scale-110 transition-all ease-linear duration-100  " />
                                <UserGroupIcon className="navIcon" />
                                <HeartIcon className="navIcon" />
                                {/* profile */}
                                <div className=" hover:scale-105 transform transition-all ml-1 sm:mx-4 ring-1 ring-black w-10  h-10 rounded-full relative shadow-md cursor-pointer overflow-hidden " >
                                    <img
                                        onClick={() => signOut()}
                                        className="object-contain w-full h-full " src={session.user.image} alt="user" />
                                </div>
                            </>
                        ) : (
                                <>
                                    <MenuIcon
                                        onClick={()=> router.push('/') }
                                        className="sm:hidden  mr-2 w-6 h-6 cursor-pointer text-gray-700 hover:scale-110 transition-all ease-linear duration-100  " />
                                    <button onClick={() => signIn("google",{ callbackUrl: '/' })}>Sign in </button>
                                </>
                        )
                        
                    }
                </div>
            </div>
        </div>
    )
}



export default NaveBar;