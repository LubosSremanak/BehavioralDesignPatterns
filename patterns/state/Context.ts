import {State} from "./State.js";

export interface Context {
    changeState: (state: State) => void;
    sendForm: () => void;
}