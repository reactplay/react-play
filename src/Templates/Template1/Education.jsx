import React from "react";
import "./template1.css";

const Education = ()=>{
    return(
        <>
            <div contentEditable={true} className="experience">
                <div className="title">EDUCATION</div>
                <div className="element"></div>
                <div className="work">
                    <div className="jobTitle">DEGREE</div>
                    <div className="circle"></div>
                    <div className="company">INSTITUTE</div>
                    <div className="circle"></div>
                    <div className="dates">DATES FROM - TO</div>
                </div>
                <div className="jobDesc">
                    You can Enter Your Grades here ...
                </div>
            </div>
        </>
    )
}

export default Education;