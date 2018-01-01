const {spawn} = require('child_process');

const child = spawn('wc'); // count lines, words, characters.

process.stdin.pipe(child.stdin)

child.stdout.on('data', data => {
    console.log(`child stdout : \n${data}`);
});

// 종료는 ctrl + d.