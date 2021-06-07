"use strict";

export default class SendData {
    constructor(nick, message, url, de) {
        this.data = { nick: nick, message: message }
        this.url = "/";
        if (url) {
            this.url += url;
        }
<<<<<<< HEAD
=======
        this.address = "https://irc-arkadiusz-sala.herokuapp.com/"
        if(de)
>>>>>>> 3c5710f3cec5e6f35aa333513d37d09f646daf33
        this.sendIt();
        else this.sendIt2();
            
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
