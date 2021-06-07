"use strict";

export default class SendData {
    constructor(nick, message, url, de) {
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
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(this.data)
        });
    }
}
