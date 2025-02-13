const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle request here
    // ...
    res.end('Hello World!');
  } catch (err) {
    console.error('Request processing error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Optionally restart the server here
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});