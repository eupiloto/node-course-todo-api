//const MongoClient = require('mongodb').MongoClient;
//var obj = new ObjectID();
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('unable to connect to MongoDb server');
       }
    console.log('Connected to MongoDb server');
    
//    db.collection('Todos').find({completed:false}).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) =>{
//        console.log('Unable to fetch todos', err);
//    })
    
     db.collection('Users').findOneAndUpdate({
         _id: new ObjectID('59be74cc94d86845446e937a')
     }, {
         $set: {
             name:'Raul Barboza'
         },
         $inc: {
             age: 1
         }
     }, {
         returnOriginal: false
     }).then((result) => {
         console.log('result: ', result);
     });
    
    db.close();

});