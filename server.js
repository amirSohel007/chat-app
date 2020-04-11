const express = require('express')
const app = express()
const router = require('./router')
const PORT = 5000
const server = app.listen(process.env.PORT || PORT, ()=> {console.log(`Server is running up at ${PORT} `)})
const socketIo = require('socket.io')(server)

//Initialize router here
app.use(router)


socketIo.on('connection',(socket) =>{
    socket.on('message',(data) =>{
        socketIo.emit('message', data);
    });
  });


//   
