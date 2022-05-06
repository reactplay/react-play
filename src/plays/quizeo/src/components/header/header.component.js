import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = () => {
    
    return ( 
        <div>
            <Link to="/plays/quizeo">
                <h1 className="header">Quizeo</h1>
            </Link>
        </div>
    );
}

export default Header;