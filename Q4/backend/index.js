const socket = require('socket.io')(3000)

const users = {

}

socket.on('connection', io=>{
    io.on('new', name=>{
        users[io.id] = name
        io.broadcast.emit('new-user', name)
    })
    io.on('message', message=>{
        io.broadcast.emit('message-recieved', {message: message, name: users[io.id]})
    })
    io.on('dissconnect', ()=>{
        io.broadcast.emit('user-dissconnected', users[io.id])
        delete users[io.id]
    })
})