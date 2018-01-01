// const data = require('data');
//
// console.log(data);

// const config = require('./node_modules/config.json');
//
// console.log(config);

//const addon = require('addon');

//console.log(addon.hello());

//const printStars = require('./printStars');
//printStars(10, 'hi!');

const slowAdd = (a, b, callbackNum) => {
    setTimeout(() => {
        console.log("waiting, ", callbackNum);
        //for (let i = 0; i < 99999999; ++i) {}
        let sum = 0;
        for (let i = 1; i < 99999999; ++i) {
            sum += i;
        }
        console.log(a + b);
    }, 5000);
};

slowAdd(3, 3, 1);
slowAdd(4, 4, 2);
