import {ObserverSubject} from "../observer/ObserverSubject.js";


export class WebSockets {
    private readonly url: string = 'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';
    private counter: number = 0;
    private observer: ObserverSubject = new ObserverSubject();

    constructor() {
        const socket = new WebSocket(this.url);
        socket.onopen = this.handleSocketOpen;
        socket.onmessage = this.handleSocketMessage;
    }

    public getObservable(): ObserverSubject {
        return this.observer;
    }

    private handleSocketOpen = (): void => {
        console.log('Sockets running...')
    };

    private handleSocketMessage = (event: MessageEvent): void => {
        this.observer.next(event)
        this.counter++;
    };
}