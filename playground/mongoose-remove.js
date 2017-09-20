const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

//Todo.remove({}).then((result) => {
//    console.log(result);
//})

Todo.findOneAndRemove({_id:59be8f43736fe4c006e1f356}).then(() => {
    
}).catch((e) => {
    
});

Todo.findByIdAndRemove('59be8f43736fe4c006e1f356').then((todo) => {
    console.log(todo);
}).catch((e) => {
    
});