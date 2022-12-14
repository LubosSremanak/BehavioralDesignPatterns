import Renderer from "./shared/services/renderer.js";
import {PersonMediator} from "./patterns/mediator/PersonMediator.js";
import {UndoButton} from "./components/UndoButton.js";
import {NameInput} from "./components/NameInput.js";
import {SurnameInput} from "./components/SurnameInput.js";
import {MailInput} from "./components/MailInput.js";
import {PhoneNumberInput} from "./components/PhoneNumberInput.js";
import {AdminRadioButton} from "./components/AdminRadioButton.js";
import {AssistantRadioButton} from "./components/AssistantRadioButton.js";
import {GuestRadioButton} from "./components/GuestRadioButton.js";
import {AddressInput} from "./components/AddressInput.js";
import {SubmitButton} from "./components/SubmitButton.js";
import {Message} from "./components/Message.js";

const renderer = new Renderer(null, null, document);

const undoButton = new UndoButton(renderer.get('undo-button') as HTMLInputElement);
const nameInput = new NameInput(renderer.get('name') as HTMLInputElement);
const surnameInput = new SurnameInput(renderer.get('surname') as HTMLInputElement);
const mailInput = new MailInput(renderer.get('mail') as HTMLInputElement);
const phoneNumberInput = new PhoneNumberInput(renderer.get('phone-number') as HTMLInputElement);
const adminRadioButton = new AdminRadioButton(renderer.get('admin-radio-option') as HTMLInputElement);
const assistantRadioButton = new AssistantRadioButton(renderer.get('assistant-radio-option') as HTMLInputElement);
const guestRadioButton = new GuestRadioButton(renderer.get('guest-radio-option') as HTMLInputElement);
const addressInput = new AddressInput(renderer.get('address') as HTMLInputElement);
const submitButton = new SubmitButton(renderer.get('submit-button') as HTMLInputElement);
const messageSpan = renderer.get('message') as HTMLSpanElement;
const subjectButton = renderer.get('subject') as HTMLButtonElement;
const message = new Message(messageSpan as HTMLSpanElement, subjectButton as HTMLButtonElement);


const mediator = new PersonMediator(
    undoButton,
    nameInput,
    surnameInput,
    mailInput,
    phoneNumberInput,
    adminRadioButton,
    assistantRadioButton,
    guestRadioButton,
    addressInput,
    submitButton
);
