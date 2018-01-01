// script to clean old files in a directory.

// anything older than 7 days should be deleted.

const fs = require('fs');
const path = require('path');
//
// const filePath = path.join(__dirname, 'https.js');
// fs.utimesSync(path.join(__dirname, 'https.js'), 1000, 1000);
// fs.stat(filePath, (err, stats) => {
//     if (err) throw err;
//     console.log(stats);
// })
const dirname = path.join(__dirname, 'files');

fs.readdir(dirname, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        const filePath = path.join(dirname, file);
        fs.stat(filePath, (err, stats) => {
            if (err) throw err;
            //console.log(`${filePath} : ${JSON.stringify(stats, undefined, 2)}`);
            //console.log(stats.birthtimeMs);
            const bt = stats.mtimeMs; // stats.mtime.getTime() 도 가능.
            const sevenDays = 1000 * 3600 * 24 * 7;
            const nowTime = new Date().getTime();
            //console.log('nowTime : ', nowTime);
            ///console.log('sevenDays : ', sevenDays);
            if (nowTime - bt > sevenDays) {
                fs.unlink(filePath, (err) => {
                    if (err) throw err;
                    console.log('file deleted.');
                    console.log(filePath);
                });
            }
        });
    });
})
