//const MongoClient = require('mongodb').MongoClient;
//var obj = new ObjectID();
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('unable to connect to MongoDb server');
       }
    console.log('Connected to MongoDb server');
    
    //deleteMany
//    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    
    //deleteOne
//    db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    //findOneAndDelete
        db.collection('Users').findOneAndDelete({_id: new ObjectID('59bd444af7278806a35f34f9')}).then((result) => {
        console.log(result);
    });
    
    db.close();
});