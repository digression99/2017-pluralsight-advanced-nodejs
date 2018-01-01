const EventEmitter = require('events');

class Server extends EventEmitter{
    constructor(client) {
        super();
        this.tasks = {};
        this.taskId = 1;

        process.nextTick(() => {
            this.emit('response', 'type a command (help to list commands)');
        });

        client.on('command', (command, args) => {
            //console.log("command : ", command);

            switch(command) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown');
            }
        });
    }

    tasksString() {
        return Object.keys(this.tasks).map(key => `${key} : ${this.tasks[key]}`).join('\n');
    }

    help() {
        this.emit('response',
            `avalilable commands : 
            add task
            ls
            delete :id`
            );
    }
    add(args) {
        this.tasks[this.taskId] = args.join(' ');
        this.emit('response', `added task ${this.taskId}`);
        this.taskId++;
        //this.emit('response', args.join(' '));
    }
    ls() {
        this.emit('response', `tasks : \n${this.tasksString()}`);
    }
    delete(args) {
        delete(this.tasks[args[0]]);

        this.emit('response', `deleted task ${args[0]}`);
    }
}

module.exports = (client) => new Server(client);