import React, { Component, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Friends from '../Friends/Friends';

const FriendDetail = () => {
    const history = useHistory();
const {fid} = useParams();
const [friend, setFriend] = useState({});
useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${fid}`)
        .then( res => res.json())
        .then( data => setFriend(data));
}, []);
const handleClick = () => {
    history.push(`/friends`);
}
    return (  
        <div>
            <p>Friend Details: {fid}</p>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>Works At: {friend.company?.name}</h4>
            <button onClick={handleClick}>SeeAllFriends</button>
        </div>
    );
}
 
export default FriendDetail;