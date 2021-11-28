import { useSession } from 'next-auth/react';
const Mini_Profile = () => {
    
    return (
        <div className="" >
            <div className="flex items-center  " >
                <img
                    className=" cursor-pointer  w-12 h-12 rounded-full object-cover ring-1 ring-black "
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png"
                    alt='user name' />
                <div className="ml-4 flex flex-col" >
                    <h1 className="font-semibold  " >natnael Abebe</h1>
                    <h1 className=" font-normal text-gray-400 " >Welcome To Piper Chat </h1>
                </div>
            </div>
        </div>
    )
}

export default Mini_Profile;
