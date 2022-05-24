import React, { useRef, useState } from "react";
import "../selectTemp.css";
import BasicDetails from "./BasicDetails";
import Objective from "./Objective";
import Experience from "./Experience";
import Skills from "./Skill";
import Education from "./Education";
import Projects from "./Projects";
import { useReactToPrint } from "react-to-print";

const Template1 = () => {

    var margin = document.getElementsByClassName("margin");

    // creating hooks
    const [lpn, setLpn] = useState();

    const [lpnURL, setLpnURL] = useState();

    const [portfolio, setPortfolio] = useState();

    const [portName, setPortName] = useState();

    const [disObj, setDisObj] = useState(true);

    const [disSkl, setDisSkl] = useState(true);

    const [disWk, setDisWk] = useState(true);

    const [disEdu, setDisEdu] = useState(true);

    const [disPro, setDisPro] = useState(true);



    const showlpn = (event) => {
        setLpn(event.target.value);
    }

    const showlpnURL = (event) => {
        setLpnURL(event.target.value);
    }

    const showPortfolio = (event) => {
        setPortfolio(event.target.value);
    }

    const showPortfolioName = (event) => {
        setPortName(event.target.value);
    }

    const disableObj = () => {
        setDisObj(!disObj);
    }

    const disableSkl = () => {
        setDisSkl(!disSkl);
    }
    const disableWk = () => {
        setDisWk(!disWk);
    }
    const disableEdu = () => {
        setDisEdu(!disEdu);
    }
    const disablePro = () => {
        setDisPro(!disPro);
    }

    // download pdf

    const reference = useRef();

    const downloadPDF = useReactToPrint({
        content: () => reference.current,
    })

    return (
        <>
            <div className="main_div">
            <h1 className="editable">Edit the Template and Download the your resume in PDF Format</h1>
            <p className="note">* Template shown here might look different cause of device Dimensions. But the final PDF will be according to the Template</p>
                <div className="main_input">
                    <div className="inputs">
                        <div className="lpn">
                            <label htmlFor="linkedName">LinkedIn Profile Name : </label>
                            <input type="text" placeholder="Enter Your LinkedIn Profile Name" onChange={showlpn} />

                            <label htmlFor="linkedInURL">LinkedIn Profile URL: </label>
                            <input type="text" placeholder="Enter Your LinkedIn Profile URL" onChange={showlpnURL} />
                        </div>
                        <div className="persPortfolio">

                            <label htmlFor="linkedInURL">Portfolio / Website / Blog Text: </label>
                            <input type="text" placeholder="Portfolio / Website / Blog URL" onChange={showPortfolioName} />

                            <label htmlFor="linkedInURL">Portfolio / Website / Blog URL: </label>
                            <input type="text" placeholder="Portfolio / Website / Blog URL" onChange={showPortfolio} />
                        </div>
                    </div>
                    <div className="inputs">

                        <h2>Remove any Element from Resume</h2>

                        <div className="object">
                            <label htmlFor="obj">Objective : </label>
                            <input className="styleObj" type="checkbox" onChange={disableObj} />
                        </div>
                        <div className="sk">
                            <label htmlFor="obj">Skills : </label>
                            <input type="checkbox" onChange={disableSkl} />
                        </div>
                        <div className="wk">
                            <label htmlFor="obj">Experience : </label>
                            <input type="checkbox" onChange={disableWk} />
                        </div>
                        <div className="edu">
                            <label htmlFor="obj">Education : </label>
                            <input type="checkbox" onChange={disableEdu} />
                        </div>
                        <div className="projt">
                            <label htmlFor="obj">Projects / Achivements : </label>
                            <input type="checkbox" onChange={disablePro} />
                        </div>
                    </div>
                </div>

                <div className="inner_div" ref={reference}>
                    <BasicDetails linkedInP={lpn} linkedInURL={lpnURL} persPort={portfolio} persPortName={portName} />

                    <div className="main_inner_div" >
                        <div className="inner_div1">
                            {

                                disObj ? <Objective /> : null

                            }


                            {

                                disSkl ? <Skills /> : null

                            }

                        </div>

                        <div className="inner_div2">
                            {
                                disWk ? <Experience /> : null
                            }

                            {
                                disEdu ? <Education /> : null
                            }
                        </div>
                    </div>

                    {
                        disPro ? <Projects /> : null
                    }
                </div>

            </div>
            <div className="downloadBtn">
                <button className="btn" onClick={downloadPDF}>Download PDF <i class="fa fa-print"></i></button>
            </div>


        </>
    );
}

export default Template1;