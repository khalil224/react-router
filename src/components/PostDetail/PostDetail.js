import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css'

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPosts] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [postId])
    return (
        <div >
            <h2>This is post details for:{postId}</h2>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>

        </div>
    );
};

export default PostDetail;