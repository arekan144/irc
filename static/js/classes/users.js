"use strict";

export default class Users extends Object {
    constructor() {
        super();
        this.server = "localhost:4000"
        this['list'] = {};
        this.getUsers();
    }
    getUsers = async () => {
        let res = await fetch("http://" + this.server + "/userList")
    }

}