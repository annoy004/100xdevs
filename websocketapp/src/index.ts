import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// let usercount =0;
// let allSockets:WebSocket[] =[];
// wss.on("connection", function (socket) {
//   allSockets.push(socket);

//   usercount = usercount +1;
//   console.log("user connected  #" + usercount);

//   socket.on("message",(message) => {
//     console.log("message recieved " + message.toString() );

//     for(let i=0;i<allSockets.length;i++) {
//       const s = allSockets[i];
//         s.send(message.toString() + ":sent form the server");
//     }

//   })
//   socket.on("disconect",() => {
//     allSockets = allSockets.filter(x=>x!=socket);
//   })
// });


let usercount = 0;
interface User {
  socket: WebSocket;
  room: string;
}
let allSockets: User[] = [];

wss.on("connection", function (socket) {


  socket.on("message", (message) => {
    // @ts-ignore
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.type == "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId
      })
    }
    if (parsedMessage.type == "chat") {
      let currectUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].socket == socket) {
          currectUserRoom = allSockets[i].room;
        }
      }
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].room == currectUserRoom) {
          allSockets[i].socket.send(parsedMessage.payload.message);
        }
      }
    }


  })


});



