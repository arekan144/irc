"use strict";

import udata from "./userdata.js"

export default class LongPoolAwait {
    constructor(url, board) {
        this.url = url;

        udata.board.createSysMessage("@hello")
        this.init();

    }
    init = async () => {
        this.response = await fetch(this.url, {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: "{}",
        });
        // console.log("?")
        if (this.response.status == 502) {
            if (!udata.koniec)
                await this.init();
        }
        else if (this.response.status != 200) {
            // this.errorMess()
            if (!udata.koniec)
                await this.init();
        } else {
            let data = await this.response.json();
            console.log(data)
            if (typeof data === "object")
                for (let x = 0; x < data.message.length; x++) {
                    if (data.message[x] && data.nick[x]) {
                        // console.log("mess+nick")
                        udata.board.createMessage(data.nick[x], data.message[x]);
                    } else if (data.message[x]) {
                        switch (data.message[x].split("@")[1]) {
                            case "exit":
                                udata.board.createSysMessage(data.message[x]);
                                break;
                            case "Enick":
                                udata.board.createSysMessage(data.message[x]);
                                break;

                            default: break;
                        }
                        // console.log("smess")
                    }
                    // else {
                    //     // console.log("exit")
                    // }
                }
            if (!udata.koniec)
                await this.init();
            else udata.board.createSysMessage("@out");
        }
    }
    errorMess = () => {
        console.log("Błąd połączenia! - 503");
    }
}
