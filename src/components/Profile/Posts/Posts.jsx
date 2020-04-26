import React from 'react'
import './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (        
        <div>
            <Post message = "sweet" />
            <Post message = "art"/>
        </div>                    
    )
}

export default Posts;