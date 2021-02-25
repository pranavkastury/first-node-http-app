const EventEmitter = require('events');

//Create events class
class MyEmitter extends EventEmitter { }

//Init the Object
const myEmitter = new MyEmitter();

//Create event listener
//this function waits for an emit and performs a callback function
myEmitter.on('event', () => console.log('Event Fired bitches'))

myEmitter.emit('event')