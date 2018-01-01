const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for (let i = 0; i < 1e6; ++i)
    file.write('lorem ipsum dolaro oiwer at, iower f dsf sdidfjskldjf ewr we');

file.end();