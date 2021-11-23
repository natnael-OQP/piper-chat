import React from 'react'
import Post from './post'

const Posts = () => {
    const Data = [
        {
            id: 1,
            userName: 'natnael',
            userImage: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png',
            images: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png',
            caption:'hello world  '
        },
        {
            id: 2,
            userName: 'natnael',
            userImage: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png',
            images: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png',
            caption:'hello world  '
        },
    ]
    return (
        <div className="mt-2" >
            {
                Data.map(({ id, ...content }) => (
                    <Post key={id} {...content} />
                ))
            }
        </div>
    )
}

export default Posts
