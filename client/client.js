// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");
const inputMsg = document.getElementById("input");
const outputMsg = document.getElementById("output");
const sendBtn = document.getElementById("send");
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});
const printMessage = (msg) => {
  const span = document.createElement("span");
  span.textContent = msg;
  outputMsg.appendChild(span);
};
const sendMessage = () => {
  const msg = inputMsg.value;
  socket.send(msg);
};
socket.addEventListener("message", (event) => {
  console.log(event);
  printMessage(event.data);
});

sendBtn.addEventListener("click", sendMessage);
