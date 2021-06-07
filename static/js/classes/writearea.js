"use strict";

import SendButton from "./sendbutton.js";
import SendData from "./senddata.js";
import SystemFunctions from "./systemfunctions.js";
import udata from "./userdata.js";
export default class WriteArea {
    constructor(parentnode) {
        this.PARENTNODE = parentnode;
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
        // this.maxOut = false;
        // this.ERRNODE
    }
    handleEnter = () => {

        if (!udata.koniec) {
            let checked = this.checkIt(this.MAINNODE.innerText)
            if (!checked)
                new SendData(udata.nick, this.MAINNODE.innerText);
            // console.log(udata.nick)
            // else new SendData(false,) jeżeli chcesz żeby serwer wiedział o zmianie, inaczej po prostu 
            // użytkownicy będą wiedzieli o zmianie i zmienili ją dynamicznie, nie trzeba w tym projekcie chyba
            this.MAINNODE.innerText = "";
        } else {
            udata.board.createSysMessage("@out")
            this.MAINNODE.innerText = "";
        }
    }
    checkIt = (string) => {
        switch (string[0]) {
            case "/":
                // if (string.substr(1).split(" ")[0] == color)
                // console.log(string.substr(1).split(" "))
                switch (string.substr(1).split(" ")[0].trim()) {
                    case "color": case "c":
                        let help = false;
                        // console.log(string.substr(1).split(" "))
                        if (string.substr(1).split(" ")[1] != undefined && string.substr(1).split(" ")[1] != "") {
                            switch (string.substr(1).split(" ")[1].toLowerCase()) {
                                case "random": udata.nick = SystemFunctions.randomColor(udata.nick.split("")[0]);
                                    break;
                                case "?": case "help": help = true;
                                    break;
                                default: udata.nick = SystemFunctions.setColor(string.substr(1).split(" ")[1], udata.nick.split("")[0]);
                                    break;

                            }
                        }
                        else {
                            udata.nick = SystemFunctions.randomColor(udata.nick.split("")[0])
                            // console.log("here!")
                        }
                        if (!help)
                            udata.board.createSysMessage("@color@" + udata.nick.split("")[1])
                        else
                            udata.board.createSysMessage("@help@color")
                        break;
                    case "quit": case "exit":
                        udata.koniec = true;
                        new SendData(false, udata.nick + "@exit");
                        break;
                    case "help": case "?":
                        if (string.substr(1).split(" ")[1] != undefined) {
                            udata.board.createSysMessage("@help@" + string.substr(1).split(" ")[1])
                        } else {
                            udata.board.createSysMessage("@help@")
                        }
                        break;
                    case "nick": case "n":
                        if (string.substr(1).split(" ")[1] != undefined && string.substr(1).split(" ")[1].length > 1 && !string.substr(1).split(" ")[1].includes("@")) {
                            new SendData(false, udata.nick.split("")[0] + "@Enick@" + string.substr(1).split(" ")[1])
                            udata.nick = SystemFunctions.setNewNick(string.substr(1).split(" ")[1], udata.nick.split("")[1])
                            udata.board.createSysMessage("@nick@true")
                        } else if (string.substr(1).split(" ")[1] == undefined) {
                            udata.board.createSysMessage("@nick@" + udata.nick)
                        }
                        break;
                }
                return true;
                break;
            default: return false;
        }
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
                        // if (!this.maxOut) {
                        //     udata.board.createSysMessage("@limit")
                        //     this.maxOut = true
                        //     setTimeout(() => {
                        //         this.maxOut = false;
                        //     }, (1000 * 60 * 2))
                        // }
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