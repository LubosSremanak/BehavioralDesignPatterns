import {Mediator} from "./mediator.js";
import {NameInput} from "../../components/name-input/name-input.js";
import {SurnameInput} from "../../components/surname-input/surname-input.js";
import {MailInput} from "../../components/mail-input/mail-input.js";
import {PhoneNumberInput} from "../../components/phone-number-input/phone-number-input.js";

export class PersonMediator implements Mediator {

    private nameInput: NameInput;
    private surnameInput: SurnameInput;
    private mailInput: MailInput;
    private phoneNumberInput: PhoneNumberInput;

    constructor(nameInput: NameInput,
                surnameInput: SurnameInput,
                mailInput: MailInput,
                phoneNumberInput: PhoneNumberInput) {

        this.nameInput = nameInput;
        this.nameInput.setMediator(this);
        this.surnameInput = surnameInput;
        this.surnameInput.setMediator(this);
        this.mailInput = mailInput;
        this.mailInput.setMediator(this);
        this.phoneNumberInput = phoneNumberInput;
        this.phoneNumberInput.setMediator(this);
    }

    public notify(sender: object, event: string): void {

    }

}