"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// Create a WebSocket server on port 8080
const wss = new ws_1.WebSocketServer({ port: 8080 });
// Listen for new connections
wss.on("connection", function (socket) {
    console.log("User connected");
    // Listen for messages from the client
    socket.on("message", (e) => {
        const message = e.toString();
        console.log("Received:", message);
        if (message === "ping") {
            socket.send("pong");
        }
    });
    // Optional: You can send periodic data
    // setInterval(() => {
    //   socket.send("Current price of Solana is " + Math.random());
    // }, 500);
});
