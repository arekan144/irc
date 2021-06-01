"use strict";

export default class MessageElement {
    constructor(parent, nick, message) {
        this.nick = nick;
        this.PARENTNODE = parent;
        this.MAINNODE = document.createElement("div");
        this.init(nick, message);
    }
    init = (nick, message) => {
        this.MAINNODE.classList.add("mscontainer");
        let timeNode = document.createElement("div");
        timeNode.classList.add("time")
        let nameNode = document.createElement("div");
        nameNode.classList.add("name");
        let messageNode = document.createElement("div");
        messageNode.classList.add("message");

        let nowTime = new Date();
        timeNode.innerText = "[ " + nowTime.getHours() + ":" + nowTime.getMinutes() + " ]"
        nameNode.innerText = "<@" + nick + ">";
        messageNode.innerHTML = message;
        this.MAINNODE.append(timeNode, nameNode, messageNode);
        this.PARENTNODE.appendChild(this.MAINNODE)
    }
}