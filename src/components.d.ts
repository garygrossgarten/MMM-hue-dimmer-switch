/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HueDimmerSwitch {
    'ip': string;
    'raspberry': string;
    'sensor': string;
    'timeout': number;
    'username': string;
  }
}

declare global {


  interface HTMLHueDimmerSwitchElement extends Components.HueDimmerSwitch, HTMLStencilElement {}
  var HTMLHueDimmerSwitchElement: {
    prototype: HTMLHueDimmerSwitchElement;
    new (): HTMLHueDimmerSwitchElement;
  };
  interface HTMLElementTagNameMap {
    'hue-dimmer-switch': HTMLHueDimmerSwitchElement;
  }
}

declare namespace LocalJSX {
  interface HueDimmerSwitch {
    'ip'?: string;
    'onDimmerclick'?: (event: CustomEvent<any>) => void;
    'raspberry'?: string;
    'sensor'?: string;
    'timeout'?: number;
    'username'?: string;
  }

  interface IntrinsicElements {
    'hue-dimmer-switch': HueDimmerSwitch;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hue-dimmer-switch': LocalJSX.HueDimmerSwitch & JSXBase.HTMLAttributes<HTMLHueDimmerSwitchElement>;
    }
  }
}


