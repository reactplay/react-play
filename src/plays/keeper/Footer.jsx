import React from "react";

let d = new Date();
let time = d.getFullYear();

function Footer() {

    return <>
    <footer>
        <p> Copywrite ⓒ {time}</p>
    </footer>
    </>
}

export default Footer;