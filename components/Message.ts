import {Component} from "./Component.js";
import {WebSockets} from "../patterns/shared/WebSockets.js";
import {ObserverSubject} from "../patterns/observer/ObserverSubject.js";

export class Message extends Component {

    private subject: ObserverSubject;
    private buttonValue: boolean = true;
    private updateHandler = () => this.setValue(this.generateString());
    private observer = {update: this.updateHandler};

    constructor(private message: HTMLSpanElement, private button: HTMLButtonElement) {
        super(message);
        this.subject = new WebSockets().getObservable();
        button.onclick = this.handleClick;
    }


    public setValue(value: string): void {
        this.message.innerText = value
    }

    public getValue(): string {
        return this.message.innerText;
    }

    private handleClick = ($event: MouseEvent) => {
        const target: any = $event.target;
        target.innerHTML = this.buttonValue ? 'Unsubscribe' : 'Subscribe';
        if (this.buttonValue) {
            this.subject.attach(this.observer)
        } else {
            this.subject.detach(this.observer);
        }
        this.buttonValue = !this.buttonValue;
    };

    private generateString = () => String(Math.floor(Math.random() * 100) + 1);
}