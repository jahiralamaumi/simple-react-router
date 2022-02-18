import React, { Component, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const PostDetail = () => {
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState({});
    const history = useHistory();
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then( res => res.json())
            .then( data => setPostDetail(data));
    }, []);
    const handleAllPosts = () => {
        history.push('/posts');
    }
    return (  
        <div>
            <p>Showing Post: {postDetail.id}</p>
            <h1>{postDetail.title}</h1>
            <p>{postDetail.body}</p>
            <button onClick={handleAllPosts}>See all Posts</button>
        </div>
    );
}
 
export default PostDetail;