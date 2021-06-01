"use strict";
export default class SendButton {
    constructor(parentnode) {
        this.PARENTNODE = parentnode;
        this.BUTTON = document.createElement("button");
        this.init();
    }
    init = () => {
        this.BUTTON.classList.add("btn");
        this.BUTTON.innerText = ">>";
        this.BUTTON.style.cssText = "display:inline-block; overflow: hidden; width:4%;height: 100%;vertical-align:top;border: 1px solid black;border-radius: 1px;";

        this.PARENTNODE.appendChild(this.BUTTON);
    }
}