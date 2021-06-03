"use strict";

import WriteArea from "./writearea.js"
import SpecStyleSheet from "./stylesheet.js"
import LongPoolAwait from "./getdata.js";
import Board from "./board.js"
import SendData from "./senddata.js";
import SystemFunctions from "./systemfunctions.js";
import udata from "./userdata.js";
export default class MainICS {
    constructor(msBrd, wrtA) {
        // this.address = "http://localhost:4000/"
        this.address = "https://irc-arkadiusz-sala.herokuapp.com/"
        // this.address = "sala-arkadiusz-irc.netlify.app"
        let proposedName = "";
        while (proposedName == undefined || proposedName.length < 1)
            proposedName = prompt("Podaj nick!:");
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
        this.connection = new LongPoolAwait(this.address + "message", this.board)
        this.textarea = new WriteArea(this.wrtA, udata.nick);
        this.stylesheet = new SpecStyleSheet(document);

        // this.board.createMessage("Ala", "Mam kota!")

        // this.stylesheet.insertRules([
        //     '.test .name {background-color: green }',
        //     '.test .message {background-color: green }',
        // ])


        // this.stylesheet.insertRules("dot")
        // this.stylesheet.insertRules(["dot", "dut"])
        // this.stylesheet.insertRule('.test .name {background-color: green }')
        // this.stylesheet.insertRule('.test .message {background-color: green }')
        // this.stylesheet.zmien('.name-test', '');
        // document.adoptedStyleSheets = [this.stylesheet];

    }

}