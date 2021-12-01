import Image from 'next/image';
import { signIn } from "next-auth/react"

const SignIn = ({providers}) => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen pb-20 bg-gray-50 " >
            <div className=" h-14 w-44 md:h-20 md:w-60  relative mb-4 " >
                <Image layout="fill" objectFit="contain" src="https://seeklogo.com/images/P/pied-piper-logo-254DAE7636-seeklogo.com.png" />
            </div>
            <h1 className="text-base text-center font-semibold md:text-xl  mb-10 md:mb-20 italic " >instagram alternatives for <span className="text-green-600" >Ethiopians </span> by ethiopian </h1>
            {
                Object.values(providers).map((provider) => (
                    <div  key={provider.name}>    
                        <button
                            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                            className=" shadow-md relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                                Sign in with {provider.name}
                            </span>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}




export default SignIn;
