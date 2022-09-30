import {Component} from "./Component.js";

export class NameInput extends Component {

    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);

        inputElement.addEventListener('input', this.changeInput)
    }

    private changeInput = (): void => {
        this.mediator?.notify(this, 'input')
    }

    public getValue(): string {
        return this.inputElement.value;
    }

}