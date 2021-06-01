"use strict";

import SendButton from "./sendbutton.js";
import SendData from "./senddata.js";
export default class WriteArea {
    constructor(parentnode, nick) {
        this.PARENTNODE = parentnode;
        this.nick = nick;
        this.MAX = 255
        this.BUTTON = new SendButton(parentnode);
        this.MAINNODE = document.createElement("div");
        this.ERRNODE = document.createElement("div");
        this.init();
    }
    init = () => {
        this.MAINNODE.setAttribute("contenteditable", "true");
        this.MAINNODE.onkeydown = this.handleKeyboard;
        this.MAINNODE.onpaste = this.handlePaste;
        this.MAINNODE.style.cssText = "height: 80%;padding-left:1%;margin-top:0.1%;display:inline-block;overflow-y:auto;width:92%;margin-right:1%";
        this.BUTTON.BUTTON.onclick = this.handleEnter;
        this.PARENTNODE.insertBefore(this.MAINNODE, this.BUTTON.BUTTON);
        // this.ERRNODE
    }
    handleEnter = () => {
        new SendData(this.nick, this.MAINNODE.innerText);
        this.MAINNODE.innerText = "";
    }
    handleKeyboard = (ev) => {
        ev.stopPropagation();
        switch (ev.code) {
            case 'Enter':
                ev.preventDefault();
                this.handleEnter();
                break;
            case 'Backspace': case 'Delete': case 'ControlLeft': break;
            default:
                if (ev.ctrlKey && (ev.code == "KeyC" || ev.code == "KeyZ" || ev.code == "KeyV")) {

                } else {
                    if (this.MAINNODE.innerText.length >= this.MAX) {
                        ev.preventDefault();
                        // console.log(/*"EJ! NIE MA MIEJSCA!"*/ this.MAINNODE.offsetTop, this.MAINNODE.offsetHeight)
                    }

                }

                break;

        }
    }
    handlePaste = (ev) => {
        ev.preventDefault();
        let text = ev.clipboardData.getData('Text');
        // console.log(text)
        if (this.MAINNODE.innerText.length + text.length <= this.MAX) {
            this.MAINNODE.innerText += text;
            this.MAINNODE.focus();
        }
    }
}