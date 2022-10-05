/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
import {Observer} from "./Observer.js";

export interface Subject {
    state?: any;

    // Attach an observer to the subject.
    attach(observer: Observer): void;

    // Detach an observer from the subject.
    detach(observer: Observer): void;

    // Notify all observers about an event.
    next(message: string): void;
}