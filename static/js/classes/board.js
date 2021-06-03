"use strict";

import MessageElement from "./messageelement.js"
import JQemoticonize from "./cssemots.js"
import SystemMessage from "./systemmessage.js";
export default class Board {
    constructor(boardDiv) {
        this.MAINNODE = boardDiv;
        this.messList = [];
        this.init();
    }
    init = () => {
        this.MAINNODE.innerHTML = "";
    }
    scrollToBottom = () => {
        this.MAINNODE.scrollTop = this.MAINNODE.scrollHeight
    }
    createMessage = (nick, message) => {
        let messElement = new MessageElement(this.MAINNODE, nick, message);
        this.messList.push(messElement);
        JQemoticonize();
        this.scrollToBottom();
    }
    createSysMessage = (message) => {
        let messElement = new SystemMessage(this.MAINNODE, message);
        this.messList.push(messElement);
        JQemoticonize();
        this.scrollToBottom();
    }
}