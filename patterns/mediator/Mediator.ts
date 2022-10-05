import {Component} from "../../components/Component.js";

export interface Mediator {
    notify(sender: Component, event: string): void;
}