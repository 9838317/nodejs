/*
 
 So we can use a eventEmitter instance to listen to an event. But similarily like the event in JavaScript, this listener can also be removed. 
 call:
 
     instanceOfEventEmitter.removeListener(eventName, eventHandler)

 to remove the event listener.
 
 
 
 */




function connectionHandler1() 
{
   console.log('this is connectionHandler1 handling the connection event.');
}

// listener #2
function connectionHandler2() 
{
  console.log('this is connectionHandler2 handling the connection event');
}



var events = require('events');
var eventEmitter = new events.EventEmitter();

//add and add
eventEmitter.addListener('connection', connectionHandler1);
eventEmitter.on('connection', connectionHandler2);

//show counter
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
    console.log(eventListeners + " Listner(s) listening to connection event");


// Remove one
eventEmitter.removeListener('connection', connectionHandler1);

//show counter, remember should call listenerCount function again to update the counters.
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");



