import { useSession } from 'next-auth/react';
const Mini_Profile = () => {
    const {data:session} = useSession()
    return (
        <div className="" >
            <div className="flex items-center  " >
                <img
                    className=" cursor-pointer  w-12 h-12 rounded-full object-cover ring-1 ring-black "
                    src={session.user.image}
                    alt='user name' />
                <div className="ml-4 flex flex-col" >
                    <h1 className="font-semibold  " >{session.user.name}</h1>
                    <h1 className=" font-normal text-gray-400 " >Welcome To Piper Chat </h1>
                </div>
            </div>
        </div>
    )
}

export default Mini_Profile;
