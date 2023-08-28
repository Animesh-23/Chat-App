import WebSocket, { WebSocketServer as Server } from "ws";

const wss = new Server({ port: 8080 });

const clients = new Set();

wss.on("connection", (ws) => {
  clients.add(ws);

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
