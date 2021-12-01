import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import Mini_Profile from './Mini_Profile'
import Suggestion from './Suggestion'
import { useSession } from 'next-auth/react'

const Feed = () => {
    const { data: session } = useSession();
    
    return (
        <div
            className={`max-w-md grid grid-cols-1 sm:gap-4 md:grid-cols-3 lg:grid-cols-3 md:max-w-3xl  lg:max-w-4xl h-full mx-auto px-4 overflow-y-hidden  scrollbar-hide ${!session && "!grid-cols-1 !max-w-xl " } `} >
            {/* Left */}
            <section className=" md:col-span-2 lg:col-span-2  mr-4 h-full overflow-y-scroll scrollbar-hide   " >
                {/* Stories */}
                <Stories/>
                {/* post */}
                <Posts/>
            </section>
            {/* Right */}
            {
                session && (
                    <section className="hidden md:block  h-96 sticky top-14 " >
                        {/* Mini Profile */}
                        <Mini_Profile/>
                        {/* Suggestion */}
                        <Suggestion/>
                    </section>
                )
            }
        </div>
    )
}

export default Feed
