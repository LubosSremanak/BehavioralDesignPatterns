import {Context} from "./Context.js";
import {State} from "./State.js";
import {AdminState} from "./AdminState";
import {AssistantState} from "./AssistantState";
import {GuestState} from "./GuestState";

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

    private cleanFormDocument = (): void => {
        this.name = "";
        this.surname = "";
        this.mail = "";
        this.address = "";
        this.phoneNumber = "";

    }

    public changeToAdminState = (): void => {
        this.cleanFormDocument();
        this.changeState(new AdminState(this));
    }

    public changeToAssistantState = (): void => {
        this.cleanFormDocument();
        this.changeState(new AssistantState(this));
    }

    public changeToGuestState = (): void => {
        this.cleanFormDocument();
        this.changeState(new GuestState(this));
    }

    public changeState = (state: State): void => {
        this.state = state;
    }

    public sendForm = (): string => {
        return this.state.sendForm();
    }
}