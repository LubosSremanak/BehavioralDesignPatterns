import {Mediator} from "./mediator.js";
import {NameInput} from "../../components/name-input/name-input.js";
import {SurnameInput} from "../../components/surname-input/surname-input.js";
import {MailInput} from "../../components/mail-input/mail-input.js";
import {PhoneNumberInput} from "../../components/phone-number-input/phone-number-input.js";
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