const dns = require('dns');

dns.lookup('pluralsight.com', (err, address) => {
    console.log(address);
});

dns.resolve4('pluralsight.com', (err, address) => {
    console.log(address);
});

dns.resolve('pluralsight.com', 'A', (err, address) => {
    console.log(address);
});

// same as dns.resolveMx
dns.resolve('pluralsight.com', 'MX', (err, address) => {
    console.log(address);
});

// it to hostname.
dns.reverse('54.201.201.249', (err, hostnames) => {
    console.log(hostnames);
});