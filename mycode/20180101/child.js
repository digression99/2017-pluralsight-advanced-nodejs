process.on('message', msg => {
    console.log('message from parent : ', msg);
});

let counter = 0;

setInterval(() => {
    process.send({counter : counter++});
}, 1000);

