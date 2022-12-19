import React from "react";
import Widget from "./Widget";

const Contributions = () => {
    return <div className="grid grid-cols-3 grid-flow-row gap-x-4 gap-y-4">
    <Widget widgetHeader={"Open Issues"} widgetContent={"2"}/>
    <Widget widgetHeader={"Open Pull Requests"} widgetContent={"3"}/>
    <Widget widgetHeader={"Merged Pull Requests"} widgetContent={"4"}/>
    <Widget widgetHeader={"Closed Issues"} widgetContent={"6"}/>
    <Widget widgetHeader={"Open Issues"} widgetContent={"2"}/></div>
};

export default Contributions;