import React, { useState } from "react";
import MoviePage from "../../pages/moviePage/moviePage.component";

import './menu-item.styles.css'

const MenuItem = ({title, imageUrl, linkUrl}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () =>{
        setIsClicked(true);
    }

    const handleLocation = () => {
        if(window.location.pathname === '/plays/quizeo/movie'){  
            return <MoviePage categoryId={linkUrl}/>
        }
    }

    return ( 
            <div className="menu-item">
                <div className="image-container" style={{backgroundImage:`url(${imageUrl})`}}/>
                    <div className="image-content"
                        onClick={handleClick}>
                        {isClicked ? handleLocation(): null}
                        <h1>{title}</h1>
                </div> 
            </div>
    );
}

export default MenuItem;