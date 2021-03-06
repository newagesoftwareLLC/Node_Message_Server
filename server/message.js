const http = require('http');
const WebSocket = require('ws');
const url = require('url');
const fs = require("fs");

// uncomment wss2 to add more apps
const server = http.createServer();
const wss1 = new WebSocket.Server({ noServer: true });
//const wss2 = new WebSocket.Server({ noServer: true });

// If you want to use WSS (SSL) uncomment this
// generate your cert and private keys with OpenSSL
// or, if using Windows Server, export your cert and private key
/*const server = https.createServer({
	cert: fs.readFileSync("test.crt"),
	key: fs.readFileSync("private.key"),
	rejectUnauthorized: false
})*/

wss1.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        console.log("Received: " + data);
        wss1.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(data);
          }
        });
    });
});

/*wss2.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        console.log("Received: " + data);
        wss2.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(data);
          }
        });
    });
});*/

server.on('upgrade', function upgrade(request, socket, head) {
  const pathname = url.parse(request.url).pathname;

  if (pathname === '/inspection') {
    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request);
    });
  } /*else if (pathname === '/app_name_here') {
    wss2.handleUpgrade(request, socket, head, function done(ws) {
      wss2.emit('connection', ws, request);
    });
  }*/ else {
    socket.destroy();
  }
});

server.listen(9898);
