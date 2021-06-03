import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {createPost} from '../actions/posts';
const AddNewPost = (props) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [duration, setDuration] = useState(0);
    const [tags, setTags] = useState('');
    const [likeCount, setLikeCount] = useState(0);
    const dispatch = useDispatch();

    const addNew = (e) => {
        e.preventDefault();
        const arrTags = tags.split(',');
        const data = {
            title,
            message,
            duration,
            tags: arrTags,
            likeCount
        };

        dispatch(createPost(data));
        setTitle('');
        setMessage('');
        setTags('');
        setDuration(0);
        setLikeCount(0);
    };
    return (
        <div>
            <form onSubmit={addNew}>
                Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value) }/>
                Message: <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                Duration: <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                Tags: <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddNewPost;
