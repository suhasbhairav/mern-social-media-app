import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deletePost, updatePost } from '../actions/posts';

const Post = ({id, title, message, creator, tags, likeCount}) => {
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState('');

    const updateData = () => {
        const newData = {
            title: newTitle
        };

        dispatch(updatePost(id, newData));
        setNewTitle('');
    };

    return (
        <div>
            <span>
                {id}...{title}...
                New Title:<input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                <button onClick={() => dispatch(deletePost(id))}>Delete</button>
                <button onClick={updateData}>Update</button>       
            </span>
        </div>
    )
}

export default Post
