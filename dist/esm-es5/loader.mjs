import { a as patchEsm, b as bootstrapLazy } from './core-6d5e209c.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["hue-dimmer-switch", [[0, "hue-dimmer-switch", { "ip": [1], "raspberry": [1], "username": [1], "sensor": [1], "timeout": [2] }]]]], options);
    });
};
export { defineCustomElements };
