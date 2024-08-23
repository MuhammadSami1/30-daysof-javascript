import { WebSocketServer } from "ws";


const server = new WebSocketServer({ port: "3000" });


server.on('connection', socket => {
    socket.on('message', function message(data) {
        console.log(data.toString());

    })
})
