export default class Logger {
    static checkConstructor(filename: any) {
        if (!filename) {
            console.error(`You need to input __dirname constant in super constructor in ${this.constructor.name}`)
        }
    }

    static checkInitializedDom(dom: any) {
        if (!dom) {
            console.error('Component isn\'t initialized')
        }
    }

    static checkAttribute(attribute: any, name: any, componentName: any) {
        if (!attribute) {
            console.warn(`Attribute "${name}" is not set in component "${componentName}"`);
        }
    }

    static checkElementExists(id: any, element: any) {
        if(!element){
            console.warn(`Element with specified id:"${name}" does not exist`)
        }
    }
}
