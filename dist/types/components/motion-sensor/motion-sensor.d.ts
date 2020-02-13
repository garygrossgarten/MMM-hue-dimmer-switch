import { EventEmitter } from '../../stencil.core';
import { Observable, Subject } from 'rxjs';
export declare class DimmerSwitchHandler {
    ip: string;
    raspberry: string;
    username: string;
    sensor: string;
    timeout: number;
    dimmerclick: EventEmitter;
    dimmer: Observable<State>;
    onDestroy$: Subject<unknown>;
    constructor();
    componentDidLoad(): void;
    componentDidUnload(): void;
}
export interface DimmerSwitch {
    state: State;
    swupdate: Swupdate;
    config: Config;
    name: string;
    type: string;
    modelid: string;
    manufacturername: string;
    productname: string;
    diversityid: string;
    swversion: string;
    uniqueid: string;
    capabilities: Capabilities;
}
export interface Capabilities {
    certified: boolean;
    primary: boolean;
    inputs: Input[];
}
export interface Input {
    repeatintervals: number[];
    events: Event[];
}
export interface Event {
    buttonevent: number;
    eventtype: string;
}
export interface Config {
    on: boolean;
    battery: null;
    reachable: boolean;
    pending: any[];
}
export interface State {
    buttonevent: number;
    lastupdated: string;
}
export interface Swupdate {
    state: string;
    lastinstall: string;
}
