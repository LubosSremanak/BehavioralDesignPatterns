import {FormDocument} from "../shared/FormDocument.js";

export interface State {
    sendForm: () => string;
    getFormDocument: () => FormDocument;
    setFormDocument: (formDocument: FormDocument) => void;
}