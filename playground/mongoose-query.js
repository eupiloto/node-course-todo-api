const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');
var id = '59be8f43736fe4c006e1f356';

if(!ObjectID.isValid(id){
   console.log('ObjectID is not valid');
   })
   
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos: ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos: ', todo);
});

Todo.findById(id).then((todo) => {
    console.log('Todos: ', todo);
});

User.findById(id).then((user) => {
    console.log('Todos: ', todo);
});