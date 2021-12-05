import React, {forwardRef , useEffect, useState } from 'react'
import Image from 'next/image';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon,

} from '@heroicons/react/outline'

import {
    HeartIcon as HeartIconFilled,
    TrashIcon,
} from '@heroicons/react/solid'

// ********************------ emojis ------********************
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { useSession } from 'next-auth/react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from '@firebase/firestore';
import { db } from '../database/firebase';
import Comment from './comment';


const Post = forwardRef(({ id, username, profilePic, caption, image }) => {
    
    const {data: session} = useSession();
    const [emojis, setEmojis] = useState(false);
    let [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [likes, setLikes] = useState([]);
    const [isLiked,setIsLiked] = useState(false);

    // get comments from firestore
    useEffect(() =>
        onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timeStamp','desc')),
            (snapshot) => {
                setMessages(snapshot.docs)
            }
        )
        , [db,id])
    // get likes from firestore
    useEffect(() => 
        onSnapshot(collection(db, 'posts', id, 'likes'),
            (snapshot) =>   setLikes(snapshot.docs)
        )
    , [db,id])
    //  setLike
    useEffect(() =>
        setIsLiked(
            likes.findIndex((like) => like.id == session?.user?.uid) !== -1
        )
    ,[likes])
    
    //************************* emoji *********************************
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };
    
    //******************** send comment ****************
    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = input;
        setInput("");
        await addDoc(collection(db, 'posts', id, 'comments'), {
            message: commentToSend,
            username: session.user.name,
            profilePic: session.user.image,
            timeStamp: serverTimestamp(),
        })
    }
    //******************** like posts ********************
    const likePosts = async () => {
        if (!isLiked) {
            await setDoc(doc(db, 'posts', id, 'likes',session.user.uid),{
                username: session.user.name,
            })
        } else {
            await deleteDoc(doc(db, 'posts',id,'likes',session.user.uid))
        }   
    }
    //******************** delete post ********************
    const deletePost = async () => {
        await deleteDoc(doc(db, 'posts', id));
    }  
    return (
        <div
            ref={ref}
            className=" bg-white pb-0  py-1 mt-[15px]  shadow-sm px-[1px] sm:px-[5px] mb-6 relative rounded-md " >
            {/* Header */}
            <div className="w-full flex items-center justify-between py-4 " >
                <div className="flex items-center  " >
                    <img className="w-12 h-12 rounded-full object-cover ring-1 ring-black " src={profilePic} alt={username} />
                    <h1 className="ml-4" >{username}</h1>
                </div>
                <DotsHorizontalIcon className="postBtn" />
            </div>
            <div className="max-h-[750px] overflow-y-hidden relative " >
                <img className="w-full h-full object-contain  " src={image} alt={username} />
            </div>
            {/* Button */}
            
            <div className="w-full flex items-center  justify-between p-2   " >
                <div className="flex items-center " >
                    {
                        isLiked ? (
                            <HeartIconFilled
                                className="postBtn !text-red-600  "
                                onClick={likePosts}
                            />
                        ):(
                            <HeartIcon
                                className="postBtn !mr-2 "
                                onClick={likePosts}
                            />
                        ) 
                    }
                    {
                        likes.length > 0 && (
                            <span className="text-gray-500 text-xs font-semibold mr-3 " >likes{" "}{likes.length}</span>
                        )
                    }
                    {
                        username === session?.user?.name && (
                            <TrashIcon
                                onClick={deletePost}
                                className="mr-3 w-6 h-6 cursor-pointer  hover:scale-105 transition-all ease-linear duration-100 !text-red-600 hover:animate-bounce "
                            />
                        )
                    }
                    <ChatIcon className="postBtn" />
                    <PaperAirplaneIcon className="postBtn" />
                </div>
                <BookmarkIcon className="postBtn" />
            </div>
            {/* caption */}
            <p className="flex items-center p-[6px]  font-bold text-gray-800 shadow-sm z-50 border-b-[2px]  " >
                {username+':'} {" "} <span className="text-gray-600 font-normal text-sm ml-1 italic ">{caption}</span>
            </p>
            {/* comment */}
            
            {
                messages.length > 0 && (
                    <div className="bg-white mx-1 sm:mx-[14px]  h-28 overflow-y-scroll scrollbar-thumb-black scrollbar-thin " >
                        {
                            messages.map((props) => (
                                <Comment
                                    key={props.id}
                                    username={props.data().username}
                                    profilePic={props.data().profilePic}
                                    message={props.data().message}
                                    timeStamp={props.data().timeStamp}
                                    
                                />
                            ))
                        }
                    </div>
                    )
                }
            {/* Input Filled */}
            <form className="flex items-center p-2  h-[52px] relative shadow-sm bg-gray-50  " >
                <EmojiHappyIcon
                    onClick={()=>setEmojis(!emojis)}
                    className="postBtn w-6 h-6 "
                />
                <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="my-1 text-sm border-[1px] border-green-300 font-medium rounded-md ring-green-300  w-full outline-none py-[5px] px-[10px] focus:ring-1 text-gray-500 " type="text" placeholder="write your comment "
                />
                <button
                    onClick={sendComment}
                    disabled={!input.trim()}
                    type="submit"
                    className="disabled:text-gray-400 disabled:cursor-not-allowed font-semibold text-blue-400 px-1 "
                >  post </button>
            </form>
            {
                emojis && (
                <Picker
                    onSelect={addEmoji}
                    style={{
                        position: "absolute",
                        bottom: "62px",
                        right: "10px" ,
                        maxWidth: "250px",
                        borderRadius: "10px",
                        '@media (max-width: 670px)': {
                                width: "200px"
                        }                        
                    }}
                    theme="dark"
                />
            )}
        </div>
    )
})

export default Post
