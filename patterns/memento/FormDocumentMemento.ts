import {State} from "../state/State.js";
import {Memento} from "./Memento.js";

export class FormDocumentMemento implements Memento {
    private date: string;

    constructor(private state: State) {

        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getState(): State {
        return this.state;
    }

    public getName(): string {
        return `${this.date}`;
    }

    public getDate(): string {
        return this.date;
    }
}