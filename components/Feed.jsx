import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

const Feed = () => {
    return (
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-5xl h-full mx-auto px-4 overflow-y-hidden  scrollbar-hide  " >
            {/* Left */}
            <section className="col-span-2 lg:col-span-3  mr-4 h-full overflow-y-scroll scrollbar-hide   " >
                {/* Stories */}
                <Stories/>
                {/* post */}
                <Posts/>
            </section>
            {/* Right */}
            <section className="hidden sm:block bg-gray-100 h-96 sticky top-14 " >
                {/* Mini Profile */}
                <h1>suggestion</h1>
                {/* Suggestion */}
            </section>
        </div>
    )
}

export default Feed
