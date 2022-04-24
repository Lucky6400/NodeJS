const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('sunday', () => {
  console.log('Please start learning node.js'); // sunday = event, callback = something to be done when event is emitted
});
myEmitter.emit('sunday'); // emission of event