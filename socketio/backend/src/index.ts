import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// wss.on("connection", function (socket) {
//   console.log("user connected");
//   socket.send("hello");
//   setInterval(() => {
//     socket.send("current price of solana is " + Math.random());
//   }, 500);
//   socket.on("message",(e) =>{
//     console.log(e.toString());
//   } );
// });
wss.on("connection", function (socket) {
  console.log("user connected");
  
 socket.on("message",(e) =>{
    console.log(e.toString());
    if(e.toString() == "ping") {
        socket.send("pong");
    }
  } );
});






