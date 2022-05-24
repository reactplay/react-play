import React from "react";
import "./template1.css";

const Experience = ()=>{
    return(
        <>
            <div contentEditable={true} className="experience">
                <div className="title">EXPERIENCE</div>
                <div className="element"></div>
                <div className="work">
                    <div className="jobTitle">JOB TITLE</div>
                    <div className="circle"></div>
                    <div className="company">COMPANY</div>
                    <div className="circle"></div>
                    <div className="dates">DATES FROM - TO</div>
                </div>
                <div className="jobDesc">
                    Your Job Description comes here ...
                </div>
            </div>
        </>
    )
}

export default Experience;