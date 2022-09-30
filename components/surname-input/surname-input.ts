import {Component} from "../common/component.js";

export class SurnameInput extends Component {

    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);
    }

    getValue(): string {
        return this.inputElement.value;
    }
}