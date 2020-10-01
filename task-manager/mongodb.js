// CRUD - create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }
    // console.log("Connected correctly!");

    const db = client.db(databaseName);
    // db.collection("Users").insertOne({
    //     name: "Vlad",
    //     age: 33
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    // });

    // db.collection("Users").insertMany([
    //     {
    //         name: "Alex",
    //         age: 25
    //     },
    //     {
    //         name: "Ana",
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert documents");
    //     }
    //     console.log(result.ops);
    // });

    // db.collection("tasks-exercise").insertMany([
    //     {
    //         description: "This is the first description",
    //         completed: true
    //     },
    //     {
    //         description: "",
    //         completed: false
    //     },
    //     {
    //         description: "This is the third description",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert documents");
    //     }
    //     console.log(result.ops);
    // })
});
