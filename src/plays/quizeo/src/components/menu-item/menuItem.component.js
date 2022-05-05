import React from "react";
import { useNavigate } from "react-router-dom";

import './menu-item.styles.css'

const MenuItem = ({title, imageUrl, linkUrl}) => {
    const navigate = useNavigate()
    return ( 
            <div className="menu-item">
                <div className="image-container" style={{backgroundImage:`url(${imageUrl})`}}/>
                    <div className="image-content"
                        onClick={() => navigate(`${linkUrl}`)}>
                        <h1>{title}</h1>
                </div> 
            </div>
    );
}

export default MenuItem;