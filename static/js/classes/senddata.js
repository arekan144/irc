"use strict";

export default class SendData {
    constructor(nick, message, url, de) {
        this.data = { nick: nick, message: message }
        this.url = "";
        if (url) {
            this.url = url;
        }
        this.address = "https://irc-arkadiusz-sala.herokuapp.com/"
        if(de)
        this.sendIt();
        else this.sendIt2();
            
    }
    sendIt = () => {
        fetch(this.address + this.url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(this.data)
        });
    }
    sendIt2 = () => {
        fetch(this.address + this.url, {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(this.data)
        });
    }
}
