"use strict";

export default class SendData {
    constructor(nick, message, url) {
        this.data = { nick: nick, message: message }
        this.url = "/";
        if (url) {
            this.url += url;
        }
        this.sendIt();
    }
    sendIt = () => {
        fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.data)
        });
    }
}