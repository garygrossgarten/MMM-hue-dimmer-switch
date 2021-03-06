Module.register("MMM-hue-dimmer-switch", {
  // Override dom generator.
  getDom: function() {
    const element = document.createElement("hue-dimmer-switch");
    element.ip = this.config.ip;
    element.username = this.config.username;
    element.sensor = this.config.sensor;
    element.raspberry = this.config.raspberry;
    
    element.addEventListener("dimmerclick", (val) => {
      const event = val.detail[1].buttonevent % 1000;
        switch (event) {
        case 1:
          this.sendNotification('REMOTE_ACTION', {action: 'MONITORON'});
          break;
        case 2:
          this.sendNotification("PAGE_INCREMENT");
          break;
        case 3:
          this.sendNotification("PAGE_DECREMENT");
          break;
        case 4:
          this.sendNotification('REMOTE_ACTION', {action: 'MONITOROFF'});
          break;
      }
    });
    return element;
  },
  getScripts: function() {
    return ["hue-dimmer-switch.js"];
  }
});
