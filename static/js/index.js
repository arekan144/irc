"use strict";
import MainICS from "./classes/mainics.js"
import SendData from "./classes/senddata.js";
window.onload = () => {
    setInterval(function (params) {
        new SendData(null, null, "stayalive")
    }, 3000)
    new MainICS(document.body.getElementsByClassName("messageBoard")[0],
        document.body.getElementsByClassName("writeArea")[0]);
}
