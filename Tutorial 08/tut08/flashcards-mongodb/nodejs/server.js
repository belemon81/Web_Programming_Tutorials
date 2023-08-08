const http = require ('http');
const url = require('url');

const server = http.createServer();

server.on('request', function(req, res) {
    var q = url.parse(req.url, true);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (res.method === 'GET') {
        if (q.pathname === '/') {
            res.end('Hello World!');
        }
    
        if (q.pathname === '/hello') {
            res.end('Hello '+q.query.name+'!');
        }

        if (q.pathname === '/words') {
            // 
        }
    } else if (res.method === 'POST') {
        if (q.pathname === '/words') {
            // 
        }
    }
});

server.on('listening', function() {
    console.log('Server running!');
});

server.listen(3000);