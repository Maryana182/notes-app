const fs = require('fs')
const chalk = require('chalk')
const { string } = require('yargs')

const addUser = (Id, name, lastname, age, major) => {
    const users = loadUsers()
    
    const duplicateUser = users.find((user) => user.Id === Id && user.name === name)

    if (!duplicateUser) {
        if(string.length === [5,20]) {
            users.push({
                Id: Id,
                name: name,
                lastname: lastname,
                age: age,
                major: major
            })
            saveUsers(users)
            console.log(chalk.green.inverse('New user added!'))
        } else console.log(chalk.red.inverse('Name must be at least 5 to 20 characters!'))
    }else {
        console.log(chalk.red.inverse('User already exists!'))
    }

}

const findUserById = (Id) => {
    const users = loadUsers()
    const findUserId = users.find((user) => user.Id === Id)

    if (findUserId) {
        console.log(findUserId)
    } else {
        console.log(chalk.red.inverse('User not found!'))
    }
}

const findUserByName = (name) => {
    const users = loadUsers()
    const findUserName = users.find((user) => user.name === name)

    if (findUserName) {
        console.log(findUserName)
    } else {
        console.log(chalk.red.inverse('User name not found!'))
    }
}   


const findUserByMajor = (major) => {
    const users = loadUsers()
    const userMajorList = users.filter((user) => user.major === major)

    if (userMajorList) {

        console.log(chalk.inverse('The Users are:'))
        console.log(userMajorList)
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
        const dataBuffer = fs.readFileSync('users.json')
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