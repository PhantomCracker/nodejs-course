const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
    },
    age: {
        type: Number
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const me = new User({
//     name: 'Vlad',
//     age: 27
// });
//
// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// });

const newTask = new Task({
    description: "This is the first task",
    completed: true
});

newTask.save().then((task) => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})