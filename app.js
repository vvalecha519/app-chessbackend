const express = require('express')
const server = require('http').createServer(express)
const io = require('socket.io')(server)

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`App is live on port ${PORT}`))

io.on('connection', (socket) => {
  socket.emit("hello from server", 1,"connected");

  socket.on("hello from client", (...args) => {
    console.log(args)
  });

})