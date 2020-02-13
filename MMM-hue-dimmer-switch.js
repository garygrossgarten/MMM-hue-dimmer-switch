Module.register("MMM-hue-dimmer-switch", {
  // Override dom generator.
  getDom: function() {
    const element = document.createElement("hue-dimmer-switch");
    element.ip = this.config.ip;
    element.username = this.config.username;
    element.sensor = this.config.sensor;
    element.raspberry = this.config.raspberry;
    element.addEventListener("dimmerclick", val => {
      const event = val[1].buttonevent % 1000;
      switch (event) {
        case 1:
          console.log("turn on");
          break;
        case 2:
          this.sendNotification("PAGE_INCREMENT");
          break;
        case 3:
          this.sendNotification("PAGE_DECREMENT");
          break;
        case 4:
          console.log("turn off");
          break;
      }
    });
    return element;
  },
  getScripts: function() {
    return [this.file("./dist/hue-dimmmer-switch.js")];
  }
});
