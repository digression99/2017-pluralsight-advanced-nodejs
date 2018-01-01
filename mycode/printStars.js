const print = (stars, header) => {
    console.log('*'.repeat(stars));
    console.log(header);
    console.log('*'.repeat(stars));
}

if (require.main == module) {
    // running as a script
    print(process.argv[2], process.argv[3]);
} else {
    // being required by other files.
    module.exports = print;
}