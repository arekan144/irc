"use strict";

export default class MessageElement {
    constructor(parent, nick, message) {
        this.nick = (nick) ? nick.split("")[0] : false;
        this.PARENTNODE = parent;
        this.MAINNODE = document.createElement("div");
        this.init(nick, message);
    }
    init = (nick, message) => {
        this.MAINNODE.classList.add("mscontainer");
        let timeNode = document.createElement("div");
        timeNode.classList.add("time")
        this.nameNode = document.createElement("div");
        this.nameNode.classList.add("name");
        this.messageNode = document.createElement("div");
        this.messageNode.classList.add("message");

        let nowTime = new Date();
        timeNode.innerText = "[ " + nowTime.getHours() + ":" + ((nowTime.getMinutes() < 10) ? ("0" + nowTime.getMinutes()) : (nowTime.getMinutes())) + " ]"
        if (this.nick) {
            this.nameNode.innerHTML = '<div style="color: black"><</div>'
            this.nameNode.innerHTML += "@" + this.nick;
            this.nameNode.innerHTML += '<div style="color: black">></div>'
            this.messageNode.innerHTML = message;
            this.nameNode.style.color = nick.split("")[1];
        }
        else {
            this.message = message;
        }
        this.MAINNODE.append(timeNode, this.nameNode, this.messageNode);
        this.PARENTNODE.appendChild(this.MAINNODE)
    }
    // updateColor(color) {
    //     this.nameNode.style.color = color;
    // }
}