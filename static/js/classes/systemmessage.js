import MessageElement from "./messageelement.js";

export default class SystemMessage extends MessageElement {
    constructor(parent, message) {
        super(parent, false, message)
        this.nameNode.innerHTML = "[>SYSTEM<]"
        this.nameNode.style.color = "red"
        console.log(this.message.split("@")[1])
        switch (this.message.split("@")[1]) {
            case "exit":
                this.messageNode.innerText = "Użykownik " + this.message.split("@")[0] + " zakończył chatowanie! :(";
                break;
            case "color":
                this.messageNode.innerText = ((this.message.split("@")[0] == "") ? ("Twoj kolor od teraz to: ") : ("Kolor użytkownika " + this.message.split("@")[0] + " to od teraz: ")) + this.message.split("@")[2];
                break;
            case "hello":
                this.messageNode.innerHTML = "Witam na moim IRC. Dostepne komendy to: /color, TODO()"
                break;
            case "help":
                this.messageNode.innerHTML = "Komenda do ustawiania koloru nicku (zmiany pojawią się po w następnych wiadomościach).<br/>Sposób wywołania: /color [puste(==random)|random|color|help].<br> color -> np. 'czerwony', 'rgb(24,200,10)', '#00ff00'.<br>help -> wyświetla tą wiadomość. :)"
                break;
            default:
                this.messageNode.innerText = "TODO: " + this.message;
                break;
        }

    }
}