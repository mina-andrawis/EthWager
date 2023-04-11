const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('WebSocket connection opened');

  // Send a message to the client every 5 seconds
  const interval = setInterval(() => {
    socket.send(JSON.stringify({ message: 'Hello from server' }));
  }, 5000);

  // Clean up the interval when the client disconnects
  socket.on('close', () => {
    clearInterval(interval);
    console.log('WebSocket connection closed');
  });
});