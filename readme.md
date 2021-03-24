# Message WebSocket Server & Client
Client and server sample code for JavaScript WebSocket communication.
If you have multiple people using the same web app, this is a great way to show data update in real time across all applications.

## About
- Node.JS WebSocket Broadcast Server acting as a message server.
- Client is a simple JavaScript WebSocket client listening for new messages.

## Setup
- Edit `client/msg.js` to add more applications or change server hostname/IP.
- Edit `server/message.js` to add more applications or change the port.
- [OPTIONAL] Edit `install-windows-service.js` to reflect the exact location of the `message.js` file.

Navigate cmd/terminal to `/server` and use `npm install && npm start` to start the server.

Do you want to run the server as a service on Windows? Run `windows-install-service.bat`.