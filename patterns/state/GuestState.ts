import {State} from "./State.js";
import {FormDocument} from "../shared/FormDocument.js";

export class GuestState implements State {
    private formDocument: FormDocument;

    constructor(formDocument: FormDocument) {
        this.formDocument = formDocument;
    }

    public getFormDocument = (): FormDocument => {
        return this.formDocument;
    }

    public setFormDocument(formDocument: FormDocument): void {
        this.formDocument = formDocument;
    }

    public sendForm = (): string => {
        return `Your form ${this.formDocument.toString()} was sent to automatic system, which will control correctness of data.`
    }

    getType(): string {
        return "guest";
    }
}