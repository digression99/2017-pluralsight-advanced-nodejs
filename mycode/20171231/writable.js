const {Writable } = require('stream');

const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

// 이거는 process.stdin.pipe(process.stdout) 과 같다.
process.stdin.pipe(outStream);