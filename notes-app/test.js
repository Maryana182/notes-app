const chalk = require('chalk')
const yargs = require('yargs')
const users = require('./users.js')


yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Add a user',
    builder: {
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
       users.addUser(argv.name, argv.lastname, argv.age, argv.major)
    }
    })

yargs.command({
        command: 'list',
        describe: 'List a file',
        handler() {
            users.findUserById()
        }
        })

yargs.command({
        command: 'read',
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
            command: 'List',
            describe: 'List users',
            builder: {
                name: {
                    describe: 'name',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler(argv) {
               users.findUserByMajor(argv.name)
            }
        })

yargs.parse()