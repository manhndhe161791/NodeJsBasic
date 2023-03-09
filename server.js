const http = require('http');

const server = http.createServer((request, response) => {
    console.log("Seno...");
    response.setHeader('Content-Type', 'text/html');
    response.write('<h3> Hatsune Miku </h3>');
    response.end();
})

server.listen(3000, 'localhost', () => {
    console.log("Miku is finding you on port: 3000");
})