import {State} from "./State.js";
import {FormDocument} from "./FormDocument";

export class AssistantState implements State {
    private readonly formDocument: FormDocument;

    constructor(formDocument: FormDocument) {
        this.formDocument = formDocument;
    }

    public getFormDocument = (): FormDocument => {
        return this.formDocument;
    }

    public sendForm = (): string => {
        return "Your form was sent to Admin."
    }
}