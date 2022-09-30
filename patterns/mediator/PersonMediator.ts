import {Mediator} from "./Mediator.js";
import {NameInput} from "../../components/NameInput.js";
import {SurnameInput} from "../../components/SurnameInput.js";
import {MailInput} from "../../components/MailInput.js";
import {PhoneNumberInput} from "../../components/PhoneNumberInput.js";
import {FormDocument} from "../shared/FormDocument.js";
import {Component} from "../../components/Component.js";
import {AdminRadioButton} from "../../components/AdminRadioButton.js";
import {AssistantRadioButton} from "../../components/AssistantRadioButton.js";
import {GuestRadioButton} from "../../components/GuestRadioButton.js";
import {AddressInput} from "../../components/AddressInput.js";
import {SubmitButton} from "../../components/SubmitButton.js";

export class PersonMediator implements Mediator {
    private formDocument: FormDocument;

    constructor(private nameInput: NameInput,
                private surnameInput: SurnameInput,
                private mailInput: MailInput,
                private phoneNumberInput: PhoneNumberInput,
                private adminRadioButton: AdminRadioButton,
                private assistantRadioButton: AssistantRadioButton,
                private guestRadioButton: GuestRadioButton,
                private addressInput: AddressInput,
                private submitButton: SubmitButton) {
        this.formDocument =  new FormDocument();

        this.nameInput.setMediator(this);
        this.surnameInput.setMediator(this);
        this.mailInput.setMediator(this);
        this.phoneNumberInput.setMediator(this);
        this.adminRadioButton.setMediator(this);
        this.assistantRadioButton.setMediator(this);
        this.guestRadioButton.setMediator(this);
        this.addressInput.setMediator(this);
        this.submitButton.setMediator(this);
    }

    public notify(sender: Component, event: string): void {
        if (sender instanceof NameInput && event === 'input') {
            this.formDocument.setName(sender.getValue());
        }

        if (sender instanceof SurnameInput && event === 'input') {
            this.formDocument.setSurname(sender.getValue());
        }

        if (sender instanceof MailInput && event === 'input') {
            this.formDocument.setMail(sender.getValue());
        }

        if (sender instanceof PhoneNumberInput && event === 'input') {
            this.formDocument.setPhoneNumber(sender.getValue());
        }

        if (sender instanceof AddressInput && event === 'input') {
            this.formDocument.setAddress(sender.getValue());
        }

        if (sender instanceof AdminRadioButton && event === 'change') {
            this.addressInput.hide();
            this.formDocument.changeToAdminState();
        }

        if (sender instanceof AssistantRadioButton && event === 'change') {
            this.addressInput.hide();
            this.formDocument.changeToAssistantState();
        }

        if (sender instanceof GuestRadioButton && event === 'change') {
            this.addressInput.show();
            this.formDocument.changeToGuestState();
        }

        if (sender instanceof SubmitButton && event === 'click') {
            console.log(this.formDocument.sendForm())
        }

    }

}