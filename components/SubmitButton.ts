import {Component} from "./Component.js";

export class SubmitButton extends Component {

    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);

        inputElement.addEventListener('click', this.changeInput)
    }

    private changeInput = (): void => {
        this.mediator?.notify(this, 'click')
    }

    public getValue(): string {
        return this.inputElement.value;
    }

}