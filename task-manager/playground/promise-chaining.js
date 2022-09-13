require('../src/db/mongoose')
const User = require('../src/models/user')


// User.findByIdAndUpdate('631f4d58d7184b40a2c37039', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('631f4d58d7184b40a2c37039', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})