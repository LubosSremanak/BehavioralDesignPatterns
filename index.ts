import {Input} from "./components/input/input.js";
import Renderer from "./shared/services/renderer.js";

const renderer = new Renderer(null, null, document);
const inputElement: HTMLElement = renderer.get('input');

const inputComponent = new Input(inputElement as HTMLInputElement);
inputComponent.sayHi();
