const {spawn} = require('child_process');

// shell mode
// const child = spawn('find . -type f | wc -l', {
//     stdio : 'inherit',
//     shell : true,
//     cwd : '/Users/kimilsik/Downloads'
// });

const child = spawn('echo $HOME', {
    stdio : 'inherit',
    shell : true
});

