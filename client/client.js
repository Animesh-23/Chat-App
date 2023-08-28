const socket = new WebSocket("ws://localhost:8080");

const enterForm = document.getElementById("enter");

socket.addEventListener("open", (event) => {
  console.log(event);
  console.log("Coneected to server");
});
enterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  socket.username = event.target.username.value;
  socket.send("Hello Server ");
});
// const printMessage = (msg) => {
//   const span = document.createElement("span");
//   span.textContent = msg;
//   outputMsg.appendChild(span);
// };

// const sendMessage = () => {
//   const msg = inputMsg.value;
//   socket.send(msg);
// };

// socket.addEventListener("message", (event) => {
//   console.log(event);
//   printMessage(event.data);
// });

// sendBtn.addEventListener("click", sendMessage);
