# Project Title

UDP Server Example

## Description

This project demonstrates a simple UDP server using Node.js. The server listens for messages on port 8080 and logs the received messages along with the sender's address and port.

## Installation

1. Ensure you have Node.js installed on your machine.
2. Clone the repository or download the project files.
3. Navigate to the project directory in your terminal.

## Usage

The following code sets up a UDP server:

```javascript
import dgram from "dgram";
const socket = dgram.createSocket("udp4");

socket.bind(8080, "127.0.0.1");

socket.on("message", (msg, info) => {
  console.log(`Received message from ${info.address}:${info.port}`);
  console.log(`Message: ${msg.toString()}`);
});
```

To test the server, you can use `ncat` to send messages:

```bash
ncat -u 127.0.0.1 8080
```

Type your message and press Enter to send it to the server.

## Contributing

Feel free to submit issues or pull requests for improvements.

## Contact

For any inquiries, please contact the project maintainer.
