import React from "react";
import "./template1.css";

const Projects = () => {
    return (
        <>
            <div className="main" contentEditable={true}>
                <div className="proj">PROJECT / ACHIEVEMNETS</div>
                <div className="element"></div>
                <div className="projects" >
                    <div className="project1">
                        <div className="protitle">PROJECT TITLE</div>
                        <div className="proDesc">Project Description Comes Here....</div>
                    </div>
                    <div className="line"></div>
                    <div className="project2">
                        <div className="protitle">PROJECT TITLE</div>
                        <div className="proDesc">Project Description Comes Here....</div>
                    </div>
                    <div className="line"></div>
                    <div className="project3">
                        <div className="protitle">PROJECT TITLE</div>
                        <div className="proDesc">Project Description Comes Here....</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects