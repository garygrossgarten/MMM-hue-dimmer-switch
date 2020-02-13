import { a as patchEsm, b as bootstrapLazy } from './core-6d5e209c.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["hue-dimmer-switch",[[0,"hue-dimmer-switch",{"ip":[1],"raspberry":[1],"username":[1],"sensor":[1],"timeout":[2]}]]]], options);
  });
};

export { defineCustomElements };
