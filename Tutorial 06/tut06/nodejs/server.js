const http = require('http');
const server = http.createServer();
const url = require('url');
server.on('request', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World!');

    var q = url.parse(req.url, true);
    if (q.pathname === '/') {
        res.end('Hello World!');
    }
    if (q.pathname === '/hello') {
        res.end('Hello ' + q.query.name + '!');
    }
    if (q.pathname === '/method') {
        if (req.method === 'GET') {
            res.end('GET all flashcard!');
        } else if (req.method === 'POST') {
            res.end('Add new flashcard!');
        }
    }

})
server.on('listening', function () {
    console.log('Server running!');
});
server.listen(3000);
