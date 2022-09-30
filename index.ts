import Renderer from "./shared/services/renderer.js";
import {PersonMediator} from "./patterns/mediator/person-mediator.js";
import {NameInput} from "./components/name-input/name-input.js";
import {SurnameInput} from "./components/surname-input/surname-input.js";
import {MailInput} from "./components/mail-input/mail-input.js";
import {PhoneNumberInput} from "./components/phone-number-input/phone-number-input.js";

const renderer = new Renderer(null, null, document);

const nameInput = new NameInput(renderer.get('name') as HTMLInputElement);
const surnameInput = new SurnameInput(renderer.get('surname') as HTMLInputElement);
const mailInput = new MailInput(renderer.get('surname') as HTMLInputElement);
const phoneNumberInput = new PhoneNumberInput(renderer.get('surname') as HTMLInputElement);

const mediator = new PersonMediator(nameInput, surnameInput, mailInput, phoneNumberInput);
