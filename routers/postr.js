"use strict";

const EventEmitter = require('events');
const express = require('express');
const path = require('path');

process.setMaxListeners(10000);

var router = express.Router();

let czekacz = new EventEmitter();

let data = {
    nick: [],
    message: [],
}
let sdata = {
    nick: false,
    message: "",
}

// let handler = {
//     set(target, property, value) {
//         target[property] = value;
//         console.log(data)
//         czekacz.emit('mess')
//         return true;
//     },
// };

// let proxyData = new Proxy(data, handler);

// messProxy.message += "dut" + ";"; to wywoła event
// data.message += "dit"; to nie

router.post('/', function (req, res) {
    res.header('Access-Control-Allow-Origin': '*')
    // console.log("przychodzi! message", req.body);
    console.log(req.body)
    if (req.body.nick) {
        data.nick = [...data.nick, req.body.nick]
        data.message = [...data.message, req.body.message]
        czekacz.emit('mess');
    } else {
        // req.body.message.split()
        // sdata.message;
        switch (req.body.message.split("@")[1]) {
            case "exit": case "Enick":
                console.log("exit!")
                data.nick = [...data.nick, false]
                data.message = [...data.message, req.body.message]
                czekacz.emit("mess");
                break;
            default: break;

        }
    }
    // console.log(data.message, req.body.nick)
    res.send();
})

router.post("/stayalive", function (req, res) {
    res.header('Access-Control-Allow-Origin': '*')
    res.send("OK")
})

router.post('/test', function () {
    res.header('Access-Control-Allow-Origin': '*')
    console.log("test")
})

router.post('/message', async function (req, res) {
    czekacz.once('mess', () => {
        // res.set({ 'Content-Type': 'plane/text' });
        res.header('Access-Control-Allow-Origin': '*')
        res.send(JSON.stringify(data))
        setTimeout(() => {
            data = {
                nick: [],
                message: [],
            }
        }, 100)
        return true;
    })
    // czekacz.once('smess', () => {
    //     res.send(JSON.stringify(sdata))
    //     setTimeout(() => {
    //         sdata = {
    //             nick: false,
    //             message: "",
    //         }
    //     }, 100)
    //     return true;
    // })

})


module.exports = router;
