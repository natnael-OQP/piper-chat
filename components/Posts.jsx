import React, { useEffect, useState } from 'react'
// firebase
import {  collection, onSnapshot, orderBy, query,  } from "@firebase/firestore";
import { db } from '../database/firebase';
import Post from './Post'
import FlipMove from 'react-flip-move';

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
            <FlipMove>
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
            </FlipMove>
        </div>
    )
}

export default Posts
