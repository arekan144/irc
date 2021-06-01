"use strict";

export default class LongPoolAwait {
    constructor(url, board) {
        this.url = url;
        this.board = board;
        this.board.createMessage("Ala", "Mam kota!")
        this.init();

    }
    init = async () => {
        this.response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: "{}",
        });
        // console.log("?")
        if (this.response.status == 502) {
            await this.init();
        }
        else if (this.response.status != 200) {
            this.errorMess()
        } else {
            let data = await this.response.json();
            console.log(data)

            for (let x = 0; x < data.message.length; x++) {
                if (data.message[x] && data.nick[x]) {
                    // console.log("mess+nick")
                    this.board.createMessage(data.nick[x], data.message[x])
                } else if (data.message[x]) {
                    // console.log("smess")
                } else {
                    // console.log("exit")
                }
            }
            await this.init();
        }
    }
    errorMess = () => {
        console.error("Błąd połączenia!")
    }
}