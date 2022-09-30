import {FormDocument} from "../shared/FormDocument";

export interface State {
    sendForm: () => string;
    getFormDocument: () => FormDocument;
}