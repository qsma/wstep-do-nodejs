const events = require("events");

const myEmitter = new events.EventEmitter();

myEmitter.on("ping", () => {
  console.log("pong");
});

myEmitter.emit("ping");
myEmitter.emit("test");
myEmitter.emit("ping");
