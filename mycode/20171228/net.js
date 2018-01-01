process.stdout.write('\u001B[2J\u001B[0;0f');
let counter = 0;
let sockets = {};

const server = require('net').createServer();

function timestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
    //if (!socket.id) {
    socket.id = counter++;
        //sockets[socket.id] = socket;
    //}

    console.log('client connected');
    socket.write('Please type your name : ');

    socket.on('data', data => {
        //console.log('data is : ', data);
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`welcome ${socket.name} ! socketid : ${socket.id} \n`);
            sockets[socket.id] = socket;
            // socket.push({
            //     socket.id,
            //     socket
            // });

            return;
        }

        Object.entries(sockets).forEach(([key, clientSocket]) => {
            //console.log('key : ', key);
            //console.log(`key : ${key}, socketid : ${socket.id}`);
            //console.log(`type of key : ${typeof key}, socketid : ${typeof socket.id}`);
            // what's the difference?
            // if (socket.id === key) {
            //     console.log(`matched, key : ${key}, socketid : ${socket.id}`);
            //     return;
            // }
            if (socket.id == key) {
                //console.log(`matched, key : ${key}, socketid : ${socket.id}`);
                return;
            }
            clientSocket.write(`${socket.name} ${timestamp()} : `);
            clientSocket.write(data); // default is utf-8
        });
        // or
        // Object.values(sockets).forEach((clientSocket) => {
        //     clientSocket.write(`${socket.id} : `);
        //     clientSocket.write(data); // default is utf-8
        // })
    });

    socket.on('end', () => {
        console.log('client disconnected.');

        delete sockets[socket.id];
    });

    // socket.end('end', () => {
    //     console.log('client disconnected');
    // });

    //socket.setEncoding('utf8');
});

server.listen(8000, () => console.log('server bound.'));