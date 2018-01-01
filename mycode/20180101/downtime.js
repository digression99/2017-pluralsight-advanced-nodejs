const http = require('http');
const pid = process.pid;

http
    .createServer((req, res) => {
    for (let i = 0; i < 1e7; ++i) ;
    res.end(`handled by process ${pid}`);
})
    .listen(8080, () => {
    console.log(`started process ${pid}`);
});

// setTimeout(() => {
//     process.exit(1) // death by random timeout.
// }, Math.random() * 10000);