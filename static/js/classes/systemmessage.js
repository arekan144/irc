import MessageElement from "./messageelement.js";

export default class SystemMessage extends MessageElement {
    constructor(parent, message) {
        super(parent, false, message)
        this.nameNode.innerHTML = "[>SYSTEM<]"
        this.nameNode.style.color = "red"
        console.log(this.message.split("@")[1])
        switch (this.message.split("@")[1]) {
            case "exit":
                this.messageNode.innerText = "Użykownik " + this.message.split("@")[0].split("")[0] + " zakończył chatowanie! :(";
                break;
            case "color":
                this.messageNode.innerHTML = ((this.message.split("@")[0] == "") ? ("Twoj kolor od teraz to: ") : ("Kolor użytkownika " + this.message.split("@")[0] + " to od teraz: ")) + '<div style="display: inline-block; color:' + this.message.split("@")[2] + '">' + this.message.split("@")[2] + "</div>";
                break;
            case "hello":
                this.messageNode.innerHTML = "Witam na moim IRC. Dostepne komendy to np.: /color, /exit. <br> Wpisz /help po więcej informacji!"
                break;
            case "nick":
                // console.log("nick", this.message.split("@")[1].split("-"))
                if (this.message.split("@")[2] == "true")
                    this.messageNode.innerHTML = "Nick został zmieniony.";
                else if (this.message.split("@")[2] == "false")
                    this.messageNode.innerHTML = "Nick NIE został zmieniony. Pamiętaj o minimalnej ilości znaków i nie wolno @!";
                else
                    this.messageNode.innerHTML = 'Twój nick to: <div style="display: inline-block; color:red">' + this.message.split("@")[2].split("")[0] + '</div> a twój kolor to: <div style="display: inline-block; color:' + this.message.split("@")[2].split("")[1] + '">' + this.message.split("@")[2].split("")[1] + "</div>";
                break;
            case "Enick":
                this.messageNode.innerHTML = 'Nick użytkownika <div style="display: inline-block; color:red">' + this.message.split("@")[0] + '</div> został zmieniony na <div style="display: inline-block; color:red">' + this.message.split("@")[2] + '</div>';
                break;
            case "help":
                switch (this.message.split("@")[2]) {
                    case "color": this.messageNode.innerHTML = "Komenda do ustawiania koloru nicku (zmiany pojawią się w następnych wiadomościach).<br/>Sposób wywołania: /color [puste(==random)|random|color|help].<br> color -> np. 'czerwony', 'rgb(24,200,10)', '#00ff00'.<br>help -> wyświetla tą wiadomość. :)<br> Alias: /c "
                        break;
                    case "nick": this.messageNode.innerHTML = "Zmien nick! <br> Uzycie: /nick [nowyNick] <br>!!! Nick musi być dłuższy niż jeden znak!<br> Alias: /n";
                        break;
                    case "exit": case "quit": this.messageNode.innerHTML = "Rozłącz się z serwerem.<br> Aliasy: /exit, /quit"
                        break;
                    case "": this.messageNode.innerHTML = "Dostępne komendy: /color, /exit, /help, /nick. <br>Wpisz /komenda help lub /help komenda aby dowiedzieć się więcej.<br> Alias: /?";
                        break;
                    default: this.messageNode.innerHTML = "Nie ma wskazówek dla komendy: " + this.message.split("@")[2] + ". Sprawdź pisownie!"
                }
                break;
            case "out":
                this.messageNode.innerHTML = "Połączenie z serwerem zostało przerwane! Odśwież stronę aby połączyć się ponownie!"
                break;
            default:
                this.messageNode.innerText = "TODO: " + this.message;
                break;
        }

    }
}