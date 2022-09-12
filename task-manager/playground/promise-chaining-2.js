require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('631f558cd7dd1ff16302ca3e', { completed: false }).then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})