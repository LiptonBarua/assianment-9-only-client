import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Post = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h1>Bangladesh</h1>
        </div>
    );
};

export default Post;