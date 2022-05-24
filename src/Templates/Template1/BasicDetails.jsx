import React from "react";
import "../selectTemp.css";
import "./template1.css";

const BasicDetails = (props) => {
    return (
        <>
            <div className="basicDet">
                <div contentEditable={true} className="name">Your Name</div>
                <div className="details1" contentEditable={true}>
                    <div className="email">
                        <i class="fa fa-envelope-o"></i>
                        <span>- Email - Phone No</span>
                    </div>
                    <div className="profession">Profession</div>
                </div>

                <div className="details2" >
                    <div contentEditable={false} className="linkedIn">
                        <i class="fa fa-linkedin-square"></i>
                        <span>- <a href={props.linkedInURL} target="_blank">{props.linkedInP}</a></span>
                    </div>
                    <div contentEditable={false} className="portfolio"><a href={props.persPort} target="_blank">{props.persPortName}</a></div>
                </div>
            </div>


        </>
    )
}

export default BasicDetails;