"use strict";

export default class SystemFunctions {
    static setColor = (color, string) => {
        return string + "" + w3color(color).toHexString();
    }
    static randomColor = (string) => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        return string + "" + w3color("rgb(" + r + "," + g + "," + b + ")").toHexString();
    }
}