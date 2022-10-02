import {State} from "../state/State.js";

export interface Memento {
    getState(): State;

    getName(): string;

    getDate(): string;
}

