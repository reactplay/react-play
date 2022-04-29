import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = () => {
    
    return ( 
        <div className="headerContainer">
            <Link to="/">
            <h1 className="text-5xl font-bold mt-6 mb-14">Quizeo</h1>
            </Link>
        </div>
     );
}

export default Header;