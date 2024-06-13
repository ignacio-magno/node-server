const http = require('http');

const server = http
    .createServer((_, res) => res.end('Hola Bailac'));

server.listen(3000, 'localhost');