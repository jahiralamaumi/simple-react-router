import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red'
    }
    return (
        <div>
            <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
            <NavLink to={"/about"} activeStyle={activeStyle}>About</NavLink>
            <NavLink to="/friends" activeStyle={activeStyle}>
                Friends
            </NavLink>
            <NavLink to = {'/posts'} activeStyle = {activeStyle}>Posts</NavLink>
        </div>
    );
};

export default Header;
