const chalk = require('chalk')
const yargs = require('yargs')
const users = require('./users.js')


yargs.version('1.0.0')

    
yargs.command({
    command: 'add',
    describe: 'Add a user',
    builder: {
        Id: {
            describe: 'Id',
            demandOption: true,
            type: 'string'
        },
        name: {
            describe: 'name',
            demandOption: true,
            type: 'string'
        },
        lastname: {
            describe: 'lastname',
            demandOption: true,
            type: 'string'
        },
        age: {
            describe: 'number',
            demandOption: true,
            type: 'number'
        },
        major: {
            describe: 'major',
            demandOption: true,
            type: 'string'
        }
    },
     handler(argv) {
       users.addUser(argv.Id, argv.name, argv.lastname, argv.age, argv.major)
     }
    })

    yargs.command({
        command: 'read',
        describe: 'Read a user name',
        builder: {
            Id: {
                describe: 'Id',
                demandOption: true,
                type: 'string'
            },
        },
        handler(argv) {
           users.findUserById(argv.Id)
        }
    })

yargs.command({
        command: 'read1',
        describe: 'Read a user name',
        builder: {
            name: {
                describe: 'name',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
           users.findUserByName(argv.name)
        }
    })

yargs.command({
        command: 'list',
        describe: 'List users',
        builder: {
            major: {
            describe: 'major',
            demandOption: true,
            type: 'string'
        }
        },
            handler(argv) {
               users.findUserByMajor(argv.major)
        }
    })

yargs.parse()