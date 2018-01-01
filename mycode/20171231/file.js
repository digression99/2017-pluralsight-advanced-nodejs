const fs = require('fs');
const path = require('path');

console.log("filename: ", __filename);
console.log("filename: ", __dirname);

fs.readdir(__dirname, (err, data) => {
    if (err) throw err;
    data.forEach(file => {
        const filePath = path.join(__dirname, file);
        fs.stat(filePath, (err, stats) => {
            if (err) throw err;
            fs.truncate(filePath, stats.size / 2, (err) => {
                if (err) throw err;
            });
        });
    });
});
    // data.map(file => {
    //     fs.stat(__filename, (err, stats) => {
    //         if (err) throw err;
    //
    //     });

        // fs.readFile(path.join(__dirname, file), 'utf-8', (err, file) => {
        //     if (err) throw err;
        //     let lines = {};
        //
        //
        //     //console.log(typeof file); // string
        //     file.split('\n').forEach((element, index, array) => {
        //         //console.log(`${index} : ${element}`);
        //         // if (lines[element]) {
        //         //
        //         // }
        //     });
        // });
//console.log(data);
});

