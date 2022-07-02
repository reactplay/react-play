import React from "react";
import { useDispatch} from "react-redux"
import { displayQuestionComponent, isClicked } from "../../redux/questions/questions-action";

import './menu-item.styles.css'

const MenuItem = ({title, imageUrl, linkUrl}) => {
    const dispatch = useDispatch();
    
    return ( 
            <div className="menu-item">
                <div className="image-container" style={{backgroundImage:`url(${imageUrl})`}}/>
                    <div className="image-content"
                        onClick={() => {dispatch(displayQuestionComponent(linkUrl)); dispatch(isClicked())}}>
                        <h1>{title}</h1>
                </div>
            </div>
    );
}

export default MenuItem;