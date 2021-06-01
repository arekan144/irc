"use strict";

import WriteArea from "./writearea.js"
import SpecStyleSheet from "./stylesheet.js"
import LongPoolAwait from "./getdata.js";
import Board from "./board.js"
import SendData from "./senddata.js";
export default class MainICS {
    constructor(msBrd, wrtA) {
        // this.address = "http://localhost:4000/"
        this.address = "https://irc-arkadiusz-sala.herokuapp.com/"
        // this.address = "sala-arkadiusz-irc.netlify.app"
        while (this.name == undefined || this.name.length < 1)
            this.name = prompt("Podaj nick!:");
        window.onbeforeunload = () => {
            new SendData(false, false);
        }
        this.msBrd = msBrd;
        this.wrtA = wrtA;
        SimpleScrollbar.initEl(this.msBrd);
        this.board = new Board(this.msBrd.querySelector("div.ss-content"));
        this.connection = new LongPoolAwait(this.address + "message", this.board)
        this.textarea = new WriteArea(this.wrtA, this.name);
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