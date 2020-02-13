import { Subject, timer, of } from 'rxjs';
import { map, catchError, tap, takeUntil, switchMap, share, pairwise, filter } from 'rxjs/operators';
export class DimmerSwitchHandler {
    constructor() {
        this.timeout = 1000;
        this.onDestroy$ = new Subject();
    }
    componentDidLoad() {
        this.dimmer = timer(0, this.timeout).pipe(switchMap(() => fetch(`http://${this.ip}/api/${this.username}/sensors/${this.sensor}`)), switchMap(res => res.json()), share(), map((res) => res.state), catchError(() => of(null)));
        this.dimmer.pipe(pairwise(), filter(([v1, v2]) => (v1.buttonevent % 1000 !== v2.buttonevent % 1000 || ((v1.buttonevent % 1000 === v2.buttonevent % 1000) && (v1.lastupdated !== v2.lastupdated)))), tap(console.log), tap(this.dimmerclick.emit), takeUntil(this.onDestroy$)).subscribe();
    }
    componentDidUnload() {
        this.onDestroy$.next();
    }
    static get is() { return "hue-dimmer-switch"; }
    static get originalStyleUrls() { return {
        "$": ["dimmer-switch.css"]
    }; }
    static get styleUrls() { return {
        "$": ["dimmer-switch.css"]
    }; }
    static get properties() { return {
        "ip": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "ip",
            "reflect": false
        },
        "raspberry": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "raspberry",
            "reflect": false
        },
        "username": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "username",
            "reflect": false
        },
        "sensor": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "sensor",
            "reflect": false
        },
        "timeout": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "timeout",
            "reflect": false,
            "defaultValue": "1000"
        }
    }; }
    static get events() { return [{
            "method": "dimmerclick",
            "name": "dimmerclick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
