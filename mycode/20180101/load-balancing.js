const http = require('http');
const pid = process.pid;

let usersCount;

http
    .createServer((req, res) => {
        for (let i = 0; i < 5e7;++i) ; // simulate cpu work
        res.write(`handled by process ${pid}`);
        res.end(`Users : ${usersCount}`);
})
    .listen(8080, () => {
    console.log(`started process ${pid}`);
});

process.on('message', msg => {
    usersCount = msg.usersCount;
    console.log(`message from master : ${msg}`);
});
