import React from "react";
import "./App.css";

import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
            <div className="container">
                <div className="showContent">
                    <h3>Resume Builder</h3>
                    <p>Create Attractive Resume to showcase your skills and Project using our templates </p>
                    <Link className="giveDetails" to='/selecttemplate'>Create Resume</Link>
                </div>
            </div>
        </>
    )
}

export default Home;