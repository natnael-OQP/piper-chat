import {getProviders ,signIn } from 'next-auth/react'
import NaveBar from '../../components/Navebar';

const SignIn = ({providers }) => {
    return (
        <>
            <NaveBar />
            <div className="flex items-center justify-center w-full min-h-screen bg-gray-50 " >
                {
                    Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className="px-4 py-2 bg-blue-400 text-gray-50 rounded-md shadow-md text-center font-semibold  "
                                onClick={() => signIn(provider.id,{callbackUrl:"/" })}
                            >
                                    Sign in with {provider.name}
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}

export default SignIn;
