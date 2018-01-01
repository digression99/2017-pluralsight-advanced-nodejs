function negativeSum(...args) {
    return args.reduce((arg, total) => {
        return total - arg;
    }, 0);
    //return args.reduce((arg, total) => arg - total, 0);
}

console.log(negativeSum(1, 5, 10));