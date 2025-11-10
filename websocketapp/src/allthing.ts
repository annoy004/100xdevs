import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
  username: string;
}

let allSockets: User[] = [];

function sendToSocket(socket: WebSocket, type: string, payload: any) {
  socket.send(JSON.stringify({ type, payload }));
}

wss.on("connection", function (socket) {
  console.log("New client connected");

  socket.on("message", (message) => {
    let parsedMessage: any;
    try {
      parsedMessage = JSON.parse(message.toString());
    } catch (e) {
      console.error("Invalid JSON", e);
      sendToSocket(socket, "error", { message: "Invalid JSON" });
      return;
    }

    const { type, payload } = parsedMessage;

    if (type === "join") {
      // Prevent duplicate joins
      const existingUser = allSockets.find((u) => u.socket === socket);
      if (!existingUser) {
        allSockets.push({
          socket,
          room: payload.roomId,
          username: payload.username || "Anonymous"
        });
        sendToSocket(socket, "joined", { roomId: payload.roomId });
      }
    }

    if (type === "chat") {
      const sender = allSockets.find((u) => u.socket === socket);
      if (!sender) return;
      const messageToSend = {
        message: payload.message,
        username: sender.username,
        timestamp: new Date().toISOString()
      };
      allSockets.forEach((user) => {
        if (user.room === sender.room) {
          sendToSocket(user.socket, "chat", messageToSend);
        }
      });
    }

    if (type === "leave") {
      allSockets = allSockets.filter((u) => u.socket !== socket);
      sendToSocket(socket, "left", { message: "You left the room." });
    }

    if (type === "userList") {
      const currentUser = allSockets.find((u) => u.socket === socket);
      if (!currentUser) return;
      const usersInRoom = allSockets
        .filter((u) => u.room === currentUser.room)
        .map((u) => u.username);
      sendToSocket(socket, "userList", { users: usersInRoom });
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected");
    allSockets = allSockets.filter((u) => u.socket !== socket);
  });

  // Optional ping/pong heartbeat (for keeping connection alive)
  socket.on("pong", () => {
    // Could track last seen, etc.
  });
});

setInterval(() => {
  allSockets.forEach((user) => {
    try {
      user.socket.ping();
    } catch (err) {
      console.error("Ping failed", err);
    }
  });
}, 30000); // every 30 seconds
