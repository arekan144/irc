"use strict";

const EventEmitter = require('events');
const express = require('express');
const path = require('path');

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
    // console.log("przychodzi! message", req.body);
    if (req.body.nick) {
        data.nick = [...data.nick, req.body.nick]
        data.message = [...data.message, req.body.message]
        czekacz.emit('mess');
    } else {
        req.body.message.split()
        sdata.message;

    }
    // console.log(data.message, req.body.nick)
    res.send();
})

router.post('/message', async function (req, res) {
    czekacz.once('mess', () => {
        // res.set({ 'Content-Type': 'plane/text' });
        res.send(JSON.stringify(data))
        setTimeout(() => {
            data = {
                nick: [],
                message: [],
            }
        }, 100)
        return true;
    })
    czekacz.once('smess', () => {
        res.send(JSON.stringify(sdata))
        setTimeout(() => {
            sdata = {
                nick: false,
                message: "",
            }
        }, 100)
        return true;
    })
    // data.message = "";
})


// router.post('/message', function (req, res) {
//     res.header({
//         'Content-Type': 'text/plain',
//         'Access-Control-Allow-Origin': '*',
//     })
//     loopser(res);
// })
// let loopser = (res) => {
//     setTimeout(() => {
//         if (message != "") {
//             res.send(message)
//             message = "";
//         }
//         else {
//             loopser(res)
//         }
//     }, 1000);
// }



module.exports = router;