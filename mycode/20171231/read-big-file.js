const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // 한꺼번에 메모리에서 올려서 출력하기에 비효율적.
    // fs.readFile('./big.file', (err, data) => {
    //     if (err) throw err;
    //     res.end(data);
    // });

    // stream 을 이용하여 pipe 하므로 효율적.
    const src = fs.createReadStream('./big.file');
    src.pipe(res); // res 는 writable stream.
});

server.listen(8000);