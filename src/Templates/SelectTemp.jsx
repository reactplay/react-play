import React from "react";
import "./selectTemp.css";
import template1 from "../assets/template1.jpg";
import { Link } from "react-router-dom";

const SelectTemp = () => {

    const mystyle = {
        backgroundColor: "black",
        height: 1 + "px",
        border: 1 + "px solid black",
        marginTop: 1 + "rem"
    };

    return (
        <>
            <h1>Select Template</h1>
            <hr style={mystyle}></hr>

            <div className="select">
                <div className="temp1">
                <h2>Template 1</h2>
                    <div className="img">
                        <img src={template1} />
                    </div>
                    <div className="selectT">
                    <Link style={{fontSize : 1.5 + "rem", backgroundColor : "blue"}} className="choose" to="/template1"><i style={{marginLeft: 0}} class="fa fa-check"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectTemp;