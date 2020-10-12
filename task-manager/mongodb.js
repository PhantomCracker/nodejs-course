// CRUD - create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    // db.collection('Users').findOne({ _id: new ObjectID("5f75d4270f35ba353cae9830") }, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to fetch the user");
    //     }
    //     console.log(user);
    // });
    //
    // db.collection("Users").find({ age: 33 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log("Could not fetch users");
    //     }
    //     console.log(users);
    // });
    //
    // db.collection("Users").find({ age: 33 }).count((error, count) => {
    //     if (error) {
    //         return console.log("Could not fetch users");
    //     }
    //     console.log(count);
    // });

    db.collection('tasks-exercise').findOne({ _id: new ObjectID("5f75d584dea82743805609e0") }, (error, task) => {
        if (error) {
            return console.log("Unable to fetch the task");
        }
        console.log(task);
    });
    db.collection('tasks-exercise').find({ completed: false}).toArray((error, tasks) => {
        if (error) {
            return console.log("Unable to fetch tasks");
        }
        console.log(tasks);
    });
});
