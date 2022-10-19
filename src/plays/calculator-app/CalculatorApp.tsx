import React, { useEffect, useRef } from 'react';
import './CalculatorApp.css';

// constants
const KEY_INFO = [
    { val: "7", type: "number" }, { val: "8", type: "number" }, { val: "9", type: "number" }, { val: "DEL", type: "action" }, { val: "4", type: "number" }, { val: "5", type: "number" }, { val: "6", type: "number" }, { val: "+", type: "operation" }, { val: "1", type: "number" }, { val: "2", type: "number" }, { val: "3", type: "number" }, { val: "-", type: "operation" }, { val: ".", type: "number" }, { val: "0", type: "number" }, { val: "/", type: "operation" }, { val: "x", type: "operation" }, { val: "RESET", type: "action" }, { val: "=", type: "action" }
];

const CalculatorApp = () => {
    const actionsContainerRef = useRef();

    const handleDelete = () => {
        const container = document.querySelector(".input-container") as HTMLDivElement;
        container.textContent = container.textContent !== "INVALID OPERATION" ? container.textContent.slice(0, -1) : "";
    }

    const handleReset = () => {
        const container = document.querySelector(".input-container") as HTMLDivElement;
        container.textContent = "";
    }

    const handleResult = () => {
        try {
            const container = document.querySelector(".input-container") as HTMLDivElement;
            container.textContent = eval(container.textContent);
        } catch (e) {
            const container = document.querySelector(".input-container") as HTMLDivElement;
            container.textContent = "INVALID OPERATION";
        }
    }

    const handleAction = (val: string) => {
        if (val === "DEL") handleDelete();
        if (val === "RESET") handleReset();
        if (val === "=") handleResult();
    }

    const handleNumberAndOperation = (val: string) => {
        const container = document.querySelector(".input-container") as HTMLDivElement;
        container.textContent += val === "x" ? "*" : val;
    }

    const handleClick = (e: React.MouseEvent) => {
        const target = e?.target as HTMLButtonElement;
        const val = target.dataset.val;
        const type = target.dataset.type;

        if (type === "number") {
            handleNumberAndOperation(val);
        }

        if (type === "action") {
            handleAction(val);
        }

        if (type === "operation") {
            handleNumberAndOperation(val);
        }
    }

    return <div className='calc-app-container'>
        <div className='calc-container'>
            <div className='header'>
                Calculator App
            </div>
            <div className="input-container"></div>
            <div className='actions-container' ref={actionsContainerRef}>
                {
                    KEY_INFO.map(({ val, type }) => <button className='action' key={val} data-type={type} data-val={val} onClick={handleClick}>{val}</button>)
                }
            </div>
        </div>
    </div>;
}

export default CalculatorApp;