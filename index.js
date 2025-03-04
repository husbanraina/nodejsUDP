import dgram from "dgram";
const socket = dgram.createSocket("udp4");

socket.bind(8080, "127.0.0.1");

socket.on("message", (msg, info) => {
  console.log(`Received message from ${info.address}:${info.port}`);
  console.log(`Message: ${msg.toString()}`);
});
