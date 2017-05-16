/*
 So we can use a eventEmitter instance to listen to an event. But similarily like the event in JavaScript, this listener can also be removed. 
 call:
 
     instanceOfEventEmitter.removeListener(eventName, eventHandler)

 to remove the event listener.
 
 */


function connectionHandler() 
{
  
   console.log('this is connectionHandler handling the connection event.');
    eventEmitter.emit("chain");
  
}

// chained listener #1
function chainHandler() 
{
  console.log('this is chainHandler handling the chain event');
  eventEmitter.emit("final");
}

// chained listener #2
function finalHandler() 
{
  console.log('this is finalHandler handling the final event');
}


var events = require('events');
var eventEmitter = new events.EventEmitter();

//add and add
eventEmitter.addListener('connection', connectionHandler).addListener('chain', chainHandler).addListener('final', finalHandler);

eventEmitter.emit("connection");

