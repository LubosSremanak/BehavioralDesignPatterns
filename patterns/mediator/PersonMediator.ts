import {Mediator} from "./Mediator.js";
import {NameInput} from "../../components/NameInput.js";
import {SurnameInput} from "../../components/SurnameInput.js";
import {MailInput} from "../../components/MailInput.js";
import {PhoneNumberInput} from "../../components/PhoneNumberInput.js";
import {FormDocument} from "../shared/FormDocument.js";
import {Component} from "../../components/common/component.js";

export class PersonMediator implements Mediator {
    private formDocument: FormDocument;

    constructor(private nameInput: NameInput,
                private surnameInput: SurnameInput,
                private mailInput: MailInput,
                private phoneNumberInput: PhoneNumberInput) {
        this.formDocument =  new FormDocument();

        this.nameInput.setMediator(this);
        this.surnameInput.setMediator(this);
        this.mailInput.setMediator(this);
        this.phoneNumberInput.setMediator(this);
    }

    public notify(sender: Component, event: string): void {
        if (sender instanceof NameInput && event === 'input') {
            this.formDocument.setName(sender.getValue());
        }

    }

}