const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpus = os.cpus().length;

    for (let i = 0; i < cpus; ++i) {
        cluster.fork();
    }
    console.log(`master pid : ${process.pid}`);

    cluster.on('exit', (worker, code, signal) => {
        // check if the exit is intended by the master.
        // if the master kills a worker because of the load balancing,
        // exitedAfterDisconnect flag will be set to true.
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            console.log(`worker ${worker.id} crashed. starting a new worker...` );
            cluster.fork();
        }
    });

    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers);
        const restartWorker = (workerIndex) => {
            const worker = workers[workerIndex];
            if (!worker) return; // recursive.

            worker.on('exit', () => {
                if (!worker.exitedAfterDisconnect) return;
                console.log(`exited process ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    // async 이므로 callback 안에서 recursive.
                    restartWorker(workerIndex + 1);
                });
            });
            worker.disconnect();
        };

        restartWorker(0);
    })

} else {
    require('./downtime');
}