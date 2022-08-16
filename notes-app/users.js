const fs = require('fs')
const chalk = require('chalk')

const addUser = (name, lastname, age, major) => {
    const users = loadUsers()
    const duplicateUser = users.find((user) => user.name === name)



    if (!duplicateUser) {
        users.push({
            name: name,
            lastname: lastname,
            age: age,
            major: major
        })
        saveUsers(users)
        console.log(chalk.green.inverse('New user added!'))
    }else {
        console.log(chalk.red.inverse('User already exists!'))
    }
}

const findUserById = () => {
    const users = loadUsers()

    console.log(chalk.inverse('File Id'))

    users.forEach((Id) => {
        console.log(Id.name)
    })
}

const findUserByName = (name) => {
    const users = loadUsers()

        console.log(chalk.inverse(users.name))

        users.forEach((users) => {
            console.log(users.name)
        })
}

const findUserByMajor = (major) => {
    const users = loadUsers()
    const userMajorList = users.find((user) => users.major === major)

    if (userMajorList) {
        console.log(chalk.inverse(users.name))
    } else {
        console.log(chalk.red.inverse('No users have same majors!'))
    }
}

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users)
    fs.writeFileSync('users.json', dataJSON)
}

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.js')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
return []
    }
}


module.exports = {
    addUser: addUser,
    findUserById: findUserById,
    findUserByName: findUserByName,
    findUserByMajor: findUserByMajor
}