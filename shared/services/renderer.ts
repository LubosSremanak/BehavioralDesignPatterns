/**
 * Class for work with Component DOM
 */
import Logger from "./logger.js";


export default class Renderer {
    constructor(private component: any, private selector: any, private dom: any) {

    }

    /**
     * Get html element
     *
     * @return {HTMLElement} id - element
     *
     * @example
     *
     *    getSelector(SectionComponent);
     * @param id
     */
    get(id: any) {
        Logger.checkInitializedDom(this.dom);
        const element = this.dom.getElementById(id);
        Logger.checkElementExists(id, element);
        return element;
    }

    /**
     * Get component html selector with prefix
     *
     * @param {any} component - Component
     * @return {string} - Selector
     *
     * @example
     *
     *    getSelector(SectionComponent);
     */
    getSelector(component: { selector: any; }) {
        return `${component.selector}`
    }

    /**
     * Create component
     *
     * @param {any} component - Component
     * @return {HTMLElement} - Created component as HtmlElement
     *
     * @example
     *
     *    createComponent(UserComponent);
     */
    createComponent(component: any) {
        const selector = this.getSelector(component);
        return document.createElement(selector);
    }

    /**
     * Change (clear and append) Component to container with parentId
     *
     * @param parentId
     * @param {any} component - Component
     * @return {HTMLElement} - Created component as HtmlElement
     *
     * @example
     *
     *    change('container',UserComponent);
     */
    change(parentId: any, component: any) {
        const container = this.dom.getElementById(parentId);
        Logger.checkElementExists(parentId, container);
        container.innerHTML = "";
        return this.append(parentId, component);
    }

    /**
     * Append Component to container with parentId
     *
     * @param parentId
     * @param {any} component - Component
     * @return {HTMLElement} - Created component as HtmlElement
     *
     * @example
     *
     *    append(UserComponent);
     */
    append(parentId: any, component: any) {
        const dynamicComponent = this.createComponent(component);
        const container = this.dom.getElementById(parentId);
        Logger.checkElementExists(parentId, container);
        container.append(dynamicComponent);
        return dynamicComponent;
    }

    /**
     * Prepend Component to container with parentId
     *
     * @param parentId
     * @param {any} component - Component
     * @return {HTMLElement} - Created component as HtmlElement
     *
     * @example
     *
     *    prepend(UserComponent);
     */
    prepend(parentId: any, component: any) {
        const dynamicComponent = this.createComponent(component);
        const container = this.dom.getElementById(parentId);
        Logger.checkElementExists(parentId, container);
        container.prepend(dynamicComponent);
        return dynamicComponent;
    }


    /**
     * Remove Element
     *
     * @param {HTMLElement} element - Component
     *
     * @example
     *
     *    remove(sectionComponentElement);
     */
    remove(element: { parentNode: any; }) {
        const parent = element.parentNode;
        parent.removeChild(element);
    }

    /**
     * Remove Element by ID
     *
     * @param {string} id - Element ID
     *
     * @example
     *
     *    removeById(sectionComponentId);
     */
    removeById(id: any) {
        const element = this.dom.getElementById(id);
        Logger.checkElementExists(id, element);
        const parent = element.parentNode;
        parent.removeChild(element);
    }


    /**
     * Remove all elements by class name
     *
     * @param {string} type
     */
    removeAllByClass(type: any) {
        const content = this.dom.querySelectorAll("*");
        for (let studentContentElement of content) {
            if (studentContentElement.classList.contains(type)) {
                studentContentElement.remove();
            }
        }
    }

    /**
     * Get prop passed from parent by setProp()
     *
     * @param {string} name - Prop name
     * @return {any} - Returns prop passed from parent by setProp()
     *
     * @example
     *
     *      const name=getProp('name');
     */
    getProp(name: any) {
        const attribute = this.component.attributes.getNamedItem(name);
        Logger.checkAttribute(attribute, name, this.selector);
        return JSON.parse(attribute.value);

    }

    /**
     * Bind prop to all 'set' attributes by name
     *
     * @param {string} name - Prop & 'set', names must be same
     * @return {any} - Returns prop passed
     *
     * @example
     *      //parent
     *      <app-element someVariable="Lubos"></app-element>
     *      //this
     *      <span set="someVariable"></span>
     *      // app-element model
     *      bindProp('someVariable');
     */
    bindProp(name: any) {
        const allValues = this.dom.querySelectorAll(`[set=${name}]`);
        const attribute = this.getProp(name);
        allValues.forEach((value: { innerText: any; }) => {
            value.innerText = attribute;
        })
        return attribute;
    }

    /**
     * Bind value to all set attributes in template
     *
     * @param {string} name - Set name
     * @param value - Value to set
     *
     * @example
     *      //template
     *      <span set="variableName"></span>
     *      // component
     *      bindValue('value','variableName');
     */
    bindValue(name: any, value: any) {
        const sets = this.dom.querySelectorAll(`[set=${name}]`);
        sets.forEach((set: { innerText: any; }) => {
            set.innerText = value;
        })
    }

    /**
     * Set prop
     *
     * @param {any} component - Component
     * @param {string} variableName -Variable name
     * @param {any} variable -Any variable/object
     *
     * @example
     *     const component=this.this.dom.getElementById("id");
     *     setAttribute(myComponent, 'name', 'section1');
     */
    setProp(component: { setAttribute: (arg0: any, arg1: string) => void; }, variableName: any, variable: any) {
        const variableCheck = typeof variable === "string" ? variable : JSON.stringify(variable);
        component.setAttribute(variableName, variableCheck);
    }

    /**
     * Create event and pass data variable
     *
     * @param {string} name - A string param
     * @param {any} data - Data in event
     * @return {Event} - Returns event with data in detail
     *
     */
    createEmitter(name: string, data: any) {
        return new CustomEvent(name, {
            detail: data
        });
    }

    /**
     * Emit external event
     *
     * @param {Event} event - Data in event
     *
     * @param isGlobal
     */
    emit(event: Event, isGlobal = false) {
        if (isGlobal) {
            document.dispatchEvent(event);
        } else {
            this.component.dispatchEvent(event);
        }

    }

    /**
     * Create event, pass data and emit created event
     *
     * @param {string} name - A string param
     * @param {any} data - Data in event
     *
     * @param isGlobal
     */
    createEmitterAndEmit(name: string, data: any, isGlobal = false) {
        const emitter = this.createEmitter(name, data);
        this.emit(emitter, isGlobal);
    }


    /**
     * Subscribe event
     *
     *
     * @param component
     * @param type
     * @param handler
     */
    subscribe(component: { addEventListener: (arg0: any, arg1: (e: any) => void) => void; }, type: any, handler: any) {
        component.addEventListener(type, (e) => Renderer.#changeEvent(e, handler));
    }

    /**
     * Subscribe event
     *
     *
     * @param id
     * @param type
     * @param handler
     */
    subscribeById(id: any, type: any, handler: any) {
        const element = this.get(id)
        element.addEventListener(type, (e: { detail: any; }) => Renderer.#changeEvent(e, handler));
    }

    static #changeEvent(event: { detail: any; }, handler: (arg0: any) => void) {
        handler(event.detail);
    }
}



