const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request....')
    res.setHeader('Contet-Type', 'text/html');
    res.write("<h3>Hello World! </h3>");
    res.write("<h2>from Trungpro </h2>");
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Node.JS server us running on port: 3000');
})