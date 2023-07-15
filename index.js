const express = require('express');
const http = require('http');
const socket = require('socket.io');

const PORT = process.env.PORT || 5000

var app = express();
const server = http.createServer(app)
const io = socket(server)

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function (socket) {
    var color;
    var playerId = Math.floor((Math.random() * 100) + 1)

    console.log(playerId + ' connected');

    socket.on('joined', function (roomId) {
        if (games[roomId].players < 2) {
            games[roomId].players++;
            games[roomId].pid[games[roomId].players - 1] = playerId;
        }
        else {
            return;
        }

        console.log(games[roomId]);
        players = games[roomId].players

        if (players % 2 == 0) color = 'black';
        else color = 'white';
    });
});

server.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});