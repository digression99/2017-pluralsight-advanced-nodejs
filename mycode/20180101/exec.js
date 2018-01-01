const {exec} = require('child_process');

exec('find . -type f | wc -l', (err, stdout, stderr) => {
    // output 을 buffer 한 후에 stdout 으로 저장.
    if (err) {
        console.log(`exec error : ${err}`);
        return;
    }

    console.log(`number of files ${stdout}`);
});

