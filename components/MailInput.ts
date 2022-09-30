import {Component} from "./Component.js";

export class MailInput extends Component {

    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);
    }

    getValue(): string {
        return this.inputElement.value;
    }

}