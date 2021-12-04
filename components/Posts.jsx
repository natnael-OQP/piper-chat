import React, { useEffect, useState } from 'react'
// firebase

import {  collection, onSnapshot, orderBy, query,  } from "@firebase/firestore";
import { db } from '../database/firebase';


import Post from './post'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => (
        onSnapshot(query(collection(db, 'posts'), orderBy('timeStamp', 'desc')),
            (snapshot) => {
                setPosts(snapshot.docs)
        })
    ), [db])
    return (
        <div className="mt-2 px-0 mx-0 " >
            {
                posts.map((props) => (
                    <Post
                        key={props.id}
                        id={props.id}
                        username={props.data().username}
                        profilePic={props.data().profilePic}
                        caption={props.data().caption}
                        image={props.data().image}
                    />
                ))
            }
        </div>
    )
}

export default Posts
