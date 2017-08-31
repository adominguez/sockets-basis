var socket = io();

socket.on('connect', function() {
    console.log('connected to socket.io server')
});

socket.on('message', function(message) {
    console.log('new message');
    console.log(message.text)

    var messages = document.querySelector('#messages');

    setMessage(message.text);

});

// Handles summitting of new message
var form = document.querySelector('#message-form');
var input = document.querySelector('#message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    socket.emit('message', {
        text: input.value
    });
    setMessage(input.value);
});

function setMessage(message) {
    var messages = document.querySelector('#messages');

    var node = document.createElement("LI");
    var textnode = document.createTextNode(message);
    node.appendChild(textnode);
    messages.appendChild(node);
}