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
    console.log('a player connected');
});

server.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});