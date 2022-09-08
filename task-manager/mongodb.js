// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteOne({
    //     age: 28
    // }).then((result) => {
    //      console.log(result)
    // }).catch((e) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteMany({
    //     description: 'Renew inspection'
    // }).then((result) => {
    //      console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })  

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error.modifiedCount)
    // })

    
    // const updatePromise = db.collection('users').updateOne({
    //     _id : new ObjectID("6318c7e42ca305bb4199ebb6")
    // }, {
    //     $inc: {
    //         age: -29
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id : new ObjectID("6318c7e42ca305bb4199ebb6")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const id = new ObjectID()
    // console.log(id.id.length)
    // console.log(id.toHexString().length)

    //  db.collection('users').findOne({ _id: new ObjectID("6318ca330018d4f1d0aaa65b")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    //  db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

//     db.collection('tasks').findOne({ _id: new ObjectID("6318d190ddbd08a4ce3bb0e1") }, (error, task) => {
//         console.log(task)
//     })

//     db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//         console.log(tasks)
//     })
})
