import React from 'react';
import { Link } from 'react-router-dom';
import CustomLilnk from '../CustomLink/CustomLilnk';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy Routing Website!!!</h1>
            <nav>
                <CustomLilnk to="/">Home</CustomLilnk>
                <CustomLilnk to="/friends">Friend</CustomLilnk>
                <CustomLilnk to="/posts">Posts</CustomLilnk>
                <CustomLilnk to="/about">About</CustomLilnk>


            </nav>
        </div >
    );
};

export default Header;