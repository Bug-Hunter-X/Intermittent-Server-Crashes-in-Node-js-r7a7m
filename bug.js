const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  // ...
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});