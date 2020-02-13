'use strict';

const core = require('./core-82b6db51.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["hue-dimmer-switch.cjs",[[0,"hue-dimmer-switch",{"ip":[1],"raspberry":[1],"username":[1],"sensor":[1],"timeout":[2]}]]]], options);
});
