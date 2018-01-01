const cluster = require('cluster');
const os = require('os');

const numberOfUsersInDB = () => {
    this.count = this.count || 5;
    this.count = this.count * this.count;
    return this.count;
};

if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`forking for ${cpus} CPUs`);

    for (let i = 0; i < cpus; ++i) {
        cluster.fork();
    }

    const updateWorkers = () => {
        const usersCount = numberOfUsersInDB();
        Object.values(cluster.workers).forEach(worker => {
            worker.send({usersCount});
        })
    }

    updateWorkers();
    setInterval(updateWorkers, 10000);

    // console.dir(cluster.workers, {depth : 0});
    //
    // Object.values(cluster.workers).forEach(worker => {
    //     worker.send(`hello worker ${worker.id}`)
    // });
} else {
    require('./load-balancing');
}
