import React from 'react';
import { useDispatch } from 'react-redux';
import './header.styles.css';
import { isClicked } from '../../redux/questions/questions-action';

const Header = () => {
    let dispatch = useDispatch();
    return ( 
        <div>
            <h1 className="header" onClick={() => dispatch(isClicked())}>Quizeo</h1>
        </div>
    );
}

export default Header;