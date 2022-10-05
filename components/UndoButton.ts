import {Component} from "./Component.js";

export class UndoButton extends Component {

    constructor(private inputElement: HTMLInputElement) {
        super(inputElement);

        inputElement.addEventListener('click', this.clickButton)
    }

    private clickButton = (): void => {
        this.mediator?.notify(this, 'click')
    }

    public setValue(value: string): void {
        this.inputElement.textContent = value
    }

    public getValue(): string {
        return this.inputElement.value;
    }

}