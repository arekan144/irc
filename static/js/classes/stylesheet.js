"use strict";
export default class SpecStyleSheet extends CSSStyleSheet {
    constructor(doc) {
        super();
        doc.adoptedStyleSheets = [this]
    }
    insertRules = (it) => {
        switch (typeof (it)) {
            case 'object':
                it.forEach(i => {
                    this.insertRule(i);
                });
                break;
            case 'string':
                this.insertRule(it);
                break;
            default: break;
            // this.insertRule('.test .name {background-color: green }')
        }
    }

}