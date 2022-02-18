import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, address } = props.friend;
    const friendStyle = {
        border: '2px solid goldenrod',
        borderRadius: '5px',
        padding: '25px'
    };
    const url = `/friend/${id}`;
    const histry = useHistory();

    const handleFriendClick = () => {
        histry.push(url);
    }
    return (  
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <strong>Call Me: {phone}</strong>
            <p>Visit Me: {address.city}</p>
            <p><small>I live in: {address.zipcode}</small></p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
            <br />
            <Link to={url}>
                <button>Visit md</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me</button>
        </div>
    );
}
 
export default Friend;