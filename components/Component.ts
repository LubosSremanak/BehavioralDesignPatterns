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

    public abstract getValue(): string;
}