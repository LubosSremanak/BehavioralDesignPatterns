import {State} from "./State.js";
import {FormDocument} from "../shared/FormDocument.js";

export class AssistantState implements State {
    private readonly formDocument: FormDocument;

    constructor(formDocument: FormDocument) {
        this.formDocument = formDocument;
    }

    public getFormDocument = (): FormDocument => {
        return this.formDocument;
    }

    public sendForm = (): string => {
        return `Your form ${this.formDocument.toString()} was sent to Admin.`
    }
}