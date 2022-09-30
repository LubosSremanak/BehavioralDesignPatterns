import {State} from "../state/State.js";

export interface Context {
    changeState: (state: State) => void;
    sendForm: () => void;
}