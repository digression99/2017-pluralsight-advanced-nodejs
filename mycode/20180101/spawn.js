const {spawn} = require('child_process');

// const child = spawn('pwd');
const child = spawn('find', ['.', '-type', 'f']); // cmd 에서 find . -type  f 와 같다.

child.stdout.on('data', data => {
    console.log(`child stdout : \n${data}`);
})

child.stderr.on('data', data => {
    console.log(`child stderr : \n${data}`);
})


child.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code}, signal ${signal}`);
});