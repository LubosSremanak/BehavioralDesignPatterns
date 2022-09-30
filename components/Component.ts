import {Mediator} from "../patterns/mediator/Mediator.js";

export abstract class Component {
    private element?: HTMLElement;
    protected mediator?: Mediator;

    protected constructor(element: HTMLElement) {
        this.element = element;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    public empty(): void {
        if (['text', 'tel', 'email'].includes(this.element?.getAttribute('type') as string)) {
            (this.element as HTMLInputElement).value = '';
        }
    }

    public hide(): void {
        (this.element as HTMLInputElement).style.display = 'none';
    }

    public show(): void {
        (this.element as HTMLInputElement).style.display = 'block';
    }

    public abstract getValue(): string;
}