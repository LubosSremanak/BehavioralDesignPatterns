import {FormDocument} from "./FormDocument.js";

export interface State {
    sendForm: () => string;
    getFormDocument: () => FormDocument;
}