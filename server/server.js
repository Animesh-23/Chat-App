import WebSocket, { WebSocketServer as Server } from "ws";

const wss = new Server({ port: 8080 });

const clients = new Set();
const usernames = new Set();
wss.on("connection", (ws) => {
  console.log("client connected " + ws.username);
  clients.add(ws);
  if (usernames.has(ws.username)) {
    console.log("Username is already taken");
    ws.close();
  }
  usernames.add(ws.username);
  console.log(usernames);
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message, { binary: false });
      }
    });
  });

  ws.on("close", () => {
    clients.delete(ws);
  });
});

console.log("WebSocket server running on port 8080");
