"use strict";

import WriteArea from "./writearea.js"
import LongPoolAwait from "./getdata.js";
import Board from "./board.js"
import SendData from "./senddata.js";
import SystemFunctions from "./systemfunctions.js";
import udata from "./userdata.js";
export default class MainICS {
    constructor(msBrd, wrtA) {
        let proposedName = "";
        while (proposedName == undefined || proposedName.length < 1 || proposedName.includes("@"))
            proposedName = prompt("Podaj nick! (Długość min 2, bez @):");
        udata.nick = SystemFunctions.randomColor(proposedName);
        // this.name =  SystemFunctions.randomColor(proposedName);
        window.onunload = () => {
            if (!udata.koniec)
                new SendData(false, proposedName + "@exit");
            // console.log(this.name + "@exit")
        }
        this.msBrd = msBrd;
        this.wrtA = wrtA;
        SimpleScrollbar.initEl(this.msBrd);
        this.board = new Board(this.msBrd.querySelector("div.ss-content"));
        udata.board = this.board;
        this.connection = new LongPoolAwait("message", this.board)
        this.textarea = new WriteArea(this.wrtA, udata.nick);

    }

}