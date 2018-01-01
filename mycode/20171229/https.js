const fs = require('fs');
const server = require('https')
    .createServer({
        key : fs.readFileSync('./key.pem'), //
        cert : fs.readFileSync('./cert.pem')
        //pfx : "" // to combine them.
    });

server.on('request', (req, res) => {
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.write('hello world\n');
});

server.listen(443); // 이 포트에 접근하려면 sudo 필요