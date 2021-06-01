"use strict";

import MessageElement from "./messageelement.js"
import JQemoticonize from "./cssemots.js"
export default class Board {
    constructor(boardDiv) {
        this.MAINNODE = boardDiv;
        this.messList = [];
        this.init();
    }
    init = () => {
        this.MAINNODE.innerHTML = "";
    }
    createMessage = (nick, message) => {
        let messElement = new MessageElement(this.MAINNODE, nick, message);
        this.messList.push(messElement);
        JQemoticonize();
    }
}