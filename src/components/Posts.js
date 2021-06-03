import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post';
import AddNewPost from './AddNewPost';
const Posts = () => {
    const posts = useSelector(state => state.posts);
    return (
        <div>
           {
               posts.length > 0 &&
               posts.map(post => (
                    <Post key={post._id} 
                    id={post._id} 
                    title={post.title} 
                    message={post.message}
                    creator={post.creator}
                    tags={post.tags}
                    likeCount={post.likeCount}
                    />
               ))
               
           }

           <AddNewPost/> 
        </div>
    )
}

export default Posts
