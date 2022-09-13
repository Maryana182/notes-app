require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('631f558cd7dd1ff16302ca3e', { completed: false }).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = Task.findByIdAndDelete(id)
    const count = Task.countDocuments({ completed: false })
    return count

}

deleteTaskAndCount('631f56638f99a4b7162027bc').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})