"use strict";
import MainICS from "./classes/mainics.js"
window.onload = () => {
    
    new MainICS(document.body.getElementsByClassName("messageBoard")[0],
        document.body.getElementsByClassName("writeArea")[0]);
}