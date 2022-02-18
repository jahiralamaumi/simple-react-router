import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Posts = () => {
    const [ posts, setPosts ] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
            .then( res => res.json())
            .then( data => setPosts(data));
    }, []);
    const history = useHistory();
    const handlePostClick = () => {
        history.push(`/post/`);
    }
    return (  
        <div>
            {
                posts.map( post => <>
                    <h2>{post.title}</h2>
                    <button onClick={ () => { history.push(`/post/${post.id}`) }}>Post Detail</button>
                </>
                )
            }
        </div>
    );
}
 
export default Posts;