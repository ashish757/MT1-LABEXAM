import http from 'http';

const server = http.createServer((req, res) => {

    console.log(req.url);
    console.log(req.method);

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello from Node.js');

});

server.listen(3000, () => {
    console.log('HTTP Server running at http://localhost:3000');
});