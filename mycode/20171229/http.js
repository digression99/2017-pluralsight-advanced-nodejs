const server = require('http').createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.write('hello world\n');

    setTimeout(() => {
        res.write('another hello world\n');
    }, 1000)
    setTimeout(() => {
        res.write('yet another hello world\n');
    }, 2000)
});

server.listen(8000);