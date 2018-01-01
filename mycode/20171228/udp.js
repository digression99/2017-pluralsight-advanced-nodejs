const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

// server

const server = dgram.createSocket('udp4'); // or udp6

server.on('listening', () => console.log('udp server listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address} : ${rinfo.port} - ${msg}`);
});

server.bind(PORT, HOST);

// client

// every second, uses different port.
// setInterval(() => {
//     const client = dgram.createSocket('udp4'); // or udp6
//
//     client.send('plural rocks.', PORT, HOST, (err) => {
//         if (err) throw err;
//         console.log('udp message sent');
//         client.close();
//     });
// }, 1000);

const client = dgram.createSocket('udp4'); // or udp6
const msg = Buffer.from('plural rocks');

// 0, msg.length : where to start, where to end.
// if we send multiple things, then we can use array to the first argument.
client.send(msg, 0, 5, PORT, HOST, (err) => {
    if (err) throw err;
    console.log('udp message sent');
    client.send(msg, 5, msg.length, PORT, HOST, (err) => {
        if (err) throw err;
        console.log('udp message sent');
        client.close();
    });
});


