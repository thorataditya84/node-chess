game = new Chess();
var socket = io();

var players;
var roomId;
var play = true;

var room = document.getElementById("room")
var roomNumber = document.getElementById("roomNumbers")
var button = document.getElementById("button")
var state = document.getElementById('state')

var connect = function () {
    roomId = room.value;
    socket.emit('joined', roomId);
}
