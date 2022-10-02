import {Component} from "./Component.js";

export class AdminRadioButton extends Component {

    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);

        inputElement.addEventListener('change', this.changeInput)
    }

    private changeInput = (): void => {
        this.mediator?.notify(this, 'change')
    }

    public setValue(value: string): void {
        if (value === 'admin') {
            this.inputElement.checked = true;
        }
    }

    public getValue(): string {
        return this.inputElement.value;
    }

}