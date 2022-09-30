import {Component} from "./Component.js";

export class PhoneNumberInput extends Component {

    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);

        inputElement.addEventListener('input', this.changeInput)
    }

    private changeInput = (): void => {
        this.mediator?.notify(this, 'input')
    }

    getValue(): string {
        return this.inputElement.value;
    }

}