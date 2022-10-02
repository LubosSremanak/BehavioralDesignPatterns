import {Context} from "./Context.js";
import {State} from "../state/State.js";
import {AdminState} from "../state/AdminState.js";
import {AssistantState} from "../state/AssistantState.js";
import {GuestState} from "../state/GuestState.js";
import {Memento} from "../memento/Memento.js";
import {FormDocumentMemento} from "../memento/FormDocumentMemento.js";

export class FormDocument implements Context {
    private state: State;
    private name: string;
    private surname: string;
    private mail: string;
    private address: string;
    private phoneNumber: string;

    constructor() {
        this.state = new AdminState(this);
        this.name = "";
        this.surname = "";
        this.mail = "";
        this.address = "";
        this.phoneNumber = "";
    }

    public setName = (name: string): void => {
        this.name = name;
    }

    public getName = (): string => {
        return this.name;
    }

    public setSurname = (surname: string): void => {
        this.surname = surname;
    }

    public getSurname = (): string => {
        return this.surname;
    }

    public setMail = (mail: string): void => {
        this.mail = mail;
    }

    public getMail = (): string => {
        return this.mail;
    }

    public setAddress = (address: string): void => {
        this.address = address;
    }

    public getAddress = (): string => {
        return this.address;
    }

    public setPhoneNumber = (phoneNumber: string): void => {
        this.phoneNumber = phoneNumber;
    }

    public getPhoneNumber = (): string => {
        return this.phoneNumber;
    }

    public setState = (state: State): void => {
        this.state = state;
    }

    public getState = (): State => {
        return this.state;
    }

    private cleanFormDocument = (): void => {
        this.name = "";
        this.surname = "";
        this.mail = "";
        this.address = "";
        this.phoneNumber = "";

    }

    public changeToAdminState = (): void => {
        this.changeState(new AdminState(this));
    }

    public changeToAssistantState = (): void => {
        this.changeState(new AssistantState(this));
    }

    public changeToGuestState = (): void => {
        this.changeState(new GuestState(this));
    }

    public changeState = (state: State): void => {
        this.cleanFormDocument();
        this.state = state;
    }

    public sendForm = (): string => {
        return this.state.sendForm();
    }

    public toString = (): string => {
        const user = {
            name: this.name,
            username: this.surname,
            mail: this.mail,
            address: this.address,
            phoneNumber: this.phoneNumber
        }
        return `[New User ${JSON.stringify(user)}]`;
    }

    public clone = (): FormDocument => {
        const clone: FormDocument = new FormDocument();
        clone.setName(this.getName())
        clone.setSurname(this.getSurname())
        clone.setMail(this.getMail())
        clone.setAddress(this.getAddress())
        clone.setPhoneNumber(this.getPhoneNumber())
        clone.setState(this.getState())
        return clone;
    }

    public save(): Memento {
        this.state.setFormDocument(this.clone());
        return new FormDocumentMemento(this.state);
    }

    public restore(memento: Memento): void {
        const newState: State = memento.getState();
        const newFormDocument: FormDocument = newState.getFormDocument();

        this.setName(newFormDocument.getName())
        this.setSurname(newFormDocument.getSurname())
        this.setMail(newFormDocument.getMail())
        this.setAddress(newFormDocument.getAddress())
        this.setPhoneNumber(newFormDocument.getPhoneNumber())

        newState.setFormDocument(this);
        this.state = newState;
    }

}