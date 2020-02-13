'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-82b6db51.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["hue-dimmer-switch.cjs",[[0,"hue-dimmer-switch",{"ip":[1],"raspberry":[1],"username":[1],"sensor":[1],"timeout":[2]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
