const http = require('http');
const {fork} = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/compute') {
        // const sum = longComputation();
        // return res.end(`sum is ${sum}`);
        const compute = fork('compute.js');
        compute.send('start');

        compute.on('message', sum => {
            res.end(`sum is ${sum}`);
        });
    } else {
        res.end('ok');
    }
});

server.listen(3000, () => {
    console.log('server is listening on ', 3000);
});