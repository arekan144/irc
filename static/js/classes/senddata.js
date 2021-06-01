"use strict";

export default class SendData {
    constructor(nick, message, url) {
        this.data = { nick: nick, message: message }
        this.url = "";
        if (url) {
            this.url = url;
        }
        // this.address = "http://localhost:4000/"
        this.address = "https://irc-arkadiusz-sala.herokuapp.com/"
        this.sendIt();
    }
    sendIt = () => {
        fetch(this.address + this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.data)
        });
    }
}