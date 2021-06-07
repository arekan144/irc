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


router.post('/', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*')
    // console.log("przychodzi! message", req.body);

    console.log(req.body)
    if (req.body.nick) {
        data.nick = [...data.nick, req.body.nick]
        data.message = [...data.message, req.body.message]
        czekacz.emit('mess');
    } else {
        // req.body.message.split()
        switch (req.body.message.split("@")[1]) {
            case "exit": case "Enick":
                // console.log("exit!")
                data.nick = [...data.nick, false]
                data.message = [...data.message, req.body.message]
                czekacz.emit("mess");
                break;
            default: break;

        }
    }
    // console.log(data.message, req.body.nick)
    res.set('Access-Control-Allow-Origin', '*')
    res.send();
})

router.post("/stayalive", function (req, res) {
    res.set('Access-Control-Allow-Origin', '*')
    res.send("OK")
})

router.post('/message', async function (req, res) {
    czekacz.once('mess', () => {
        // res.set({ 'Content-Type': 'plane/text' });
        res.set('Access-Control-Allow-Origin', '*')
        res.send(JSON.stringify(data))
        setTimeout(() => {
            data = {
                nick: [],
                message: [],
            }
        }, 100)
        return true;
    })
})


module.exports = router;
