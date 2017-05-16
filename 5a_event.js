/*
    As we've shown above, using the notion of a callback function, Nodejs is able to perform like it is non-blocking in the context of a single thread.
    
    There is ONLY ONE event queue for Nodejs, when an event comes, it associate it with a callback function and then process the next event. 
    When the callback function returns, it handles the event with the associated callback function. It is by this method that it simulates a non-blocking behavior.
    This behavior is sometimes called "single threaded concurrentcy".

    The event listener listen to all the events, it is called observer.

    on means that now it is begin to listen to an event, while emit means that it is going to fire the event. That is:
    
    eventEmitter.on(eventName, eventHandler);
    
    The above line is to ask node to listen an event called eventName, and when this event fires, use the function eventHandler to handle it. So, 
    
    eventEmitter.on('connection', connectionHandler) means that, listen for event "connection", if it fires, then call connectionHandler to handle it.
    Actually, eventEmitter.on is eventEmitter.eventHandler.
    
    see the following example

*/
var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', connectionHandler);
eventEmitter.on('data_received', data_receivedHandler);
//eventEmitter.addListener('data_received', dataReceive);


eventEmitter.emit('connection');
// Create an event handler as follows

function connectionHandler() 
{
    console.log('this is connectionHandler handling the connection event.');
    eventEmitter.emit('data_received');
}
function data_receivedHandler() 
{
    console.log('This is data_receivedHandler handling the data_received event');
}