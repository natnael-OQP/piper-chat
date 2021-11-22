import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

const Feed = () => {
    return (
        <div className="max-w-5xl h-screen mx-auto px-4 flex relative scrollbar-hide  " >
            {/* Section */}
            <section className="flex flex-col mr-4 bg-gray-50 w-full " >
                {/* Stories */}
                <Stories/>
                {/* post */}
                <Posts/>
            </section>
            {/* Section */}
            <section className="w-96 bg-gray-200 h-96 sticky top-14 " >
                {/* Mini Profile */}
                {/* Suggestion */}
            </section>
        </div>
    )
}

export default Feed
