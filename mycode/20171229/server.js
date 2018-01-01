
const fs = require('fs');
const server = require('http').createServer();
const data = {};

server.on('request', (req, res) => {
    //console.log(req.url);
    switch (req.url) {
        case '/api':
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(data));
            break;
        case '/about':
        case '/home':
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(fs.readFileSync(`.${req.url}.html`));
            break;
        case '/':
            res.writeHead(301, {'Location' : '/home'}); // 301 은 permanent move.
            res.end();
            break;
        default:
            res.writeHead(404);
            res.end();
    }

    //res.writeHead(200, {'content-type' : 'text/plain'});
    //res.write('hello world\n');

    // setTimeout(() => {
    //     res.write('another hello world\n');
    // }, 1000)
    // setTimeout(() => {
    //     res.write('yet another hello world\n');
    // }, 2000)
});

server.listen(8000);