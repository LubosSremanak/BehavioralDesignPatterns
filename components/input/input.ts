import {Component} from "../common/component.js";

export class Input extends Component {
    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);
    }

    sayHi() {
        this.inputElement.value = 'Ahoj, skap';
    }

}