var socket = io();

socket.on('connect', function() {
    console.log('connected to socket.io server')
});

socket.on('message', function(message) {
    console.log('new message');
    console.log(message.text)
});

// Handles summitting of new message
var form = document.querySelector('#message-form');
var input = document.querySelector('#message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    socket.emit('message', {
        text: input.value
    });
});