const fs = require('fs')
const chalk = require('chalk')
const { string } = require('yargs')
const crypto = require('crypto')

const addUser = (Id, email, name, lastname, age, major) => {
    const users = loadUsers()
    const duplicateUser = users.find((user) => user.email === email)

    if (!duplicateUser) {
            users.push({
                Id: Id,
                email: email,
                name: name,
                lastname: lastname,
                age: age,
                major: major,
            })

                if ((name.length >= 5 && name.length <= 20) && (lastname.length >= 5 && lainitstname.length <= 20)) {
                    console.log(crypto.randomUUID(users.Id))
                    saveUsers(users)
                    console.log(chalk.green.inverse('New user added!'))   
            }else{console.log(chalk.red.inverse('Name must be at least 5 to 20 characters!'))
        }
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