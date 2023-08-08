const express = require('express');
const app = express();

// Middleware function that prints a message for every request.
function printMessage(req, res, next) {
  console.log('request to server!');
  next();
}
app.use(printMessage);

////////////////////////////////////////////////////////////////////////////////

async function startServer() {
  app.listen(3000);
  console.log('Listening on port 3000');
}
startServer();

////////////////////////////////////////////////////////////////////////////////

function onViewIndex(req, res) {
  res.send('View root request');
}
app.get('/', onViewIndex);
