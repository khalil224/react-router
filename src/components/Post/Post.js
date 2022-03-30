import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLilnk from '../CustomLink/CustomLilnk';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h2>Every facebook post will be displayed here: {posts.length}</h2>
            {
                posts.map(post => <CustomLilnk
                    key={post.id}
                    to={`/posts/${post.id}`} >{post.id}</CustomLilnk>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Post;