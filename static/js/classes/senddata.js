"use strict";

export default class SendData {
    constructor(nick, message, url) {
        this.data = { nick: nick, message: message }
        console.log(this.data, url)
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
