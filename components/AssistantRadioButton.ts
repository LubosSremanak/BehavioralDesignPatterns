import {Component} from "./Component.js";

export class AssistantRadioButton extends Component {

    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);

        inputElement.addEventListener('change', this.changeInput)
    }

    private changeInput = (): void => {
        this.mediator?.notify(this, 'change')
    }

    public setValue(value: string): void {
        if (value === 'assistant') {
            this.inputElement.checked = true;
        }
    }

    public getValue(): string {
        return this.inputElement.value;
    }

}