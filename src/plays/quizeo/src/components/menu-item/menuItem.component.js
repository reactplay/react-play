import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({title, imageUrl, linkUrl}) => {
    const navigate = useNavigate()
    return ( 
            <div className="menu-item h-72 w-72 m-1 relative flex flex-col border-4 border-white-600 center h-100vh justify-center items-center opacity-90">
            <div className="bg-center bg-cover h-72 w-full" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="content border-white-200 border-2 p-5 absolute bg-white text-black opacity-80 font-semibold border-2 border-white-400 cursor-pointer"
                onClick={() => navigate(`${linkUrl}`)}
            >
                <h1 className="text-lg">{title}</h1>
            </div> 
            </div>
        
     );
}
 
export default MenuItem;