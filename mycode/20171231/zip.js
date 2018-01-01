const crypto = require('crypto'); // transform stream.
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const {Transform} = require('stream');
const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    }
});

fs.createReadStream(file) // file 을 읽어 read stream 을 생성.
    .pipe(zlib.createGzip()) // 그것을 zlib으로 압축.
    .pipe(crypto.createCipher('aes192', 'a_secret')) // compress and encrypt.
    .pipe(progress)
    //.on('data', () => process.stdout.write('.')) // progress indicator.
    .pipe(fs.createWriteStream(file + '_encrypted' + '.zz')) // crypto 를 달면 .zz 로.
    //.pipe(fs.createWriteStream(file + '.gz')) // file.gz 로 출력.
    .on('finish', () => console.log('done'));