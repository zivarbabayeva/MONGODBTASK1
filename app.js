const mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://Zivar:8gZaKrgDCLOtGRfR@cluster0.yl12c.mongodb.net/UserDB?retryWrites=true&w=majority'
MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log(err);
    }
    console.log('Connection Created...!');

    //                                     FindOne()

    //     var dbo=db.db("UserDB");
    //     dbo.collection("users").findOne({},function(err,res){
    // if(err) throw err;
    // console.log(res);
    // db.close();

    //     }
    //     )


    //                                           INSERT()

    //     var myobj = [
    //         { name: 'John', address: 'Highway 71'},
    //         { name: 'Peter', address: 'Lowstreet 4'},
    //         { name: 'Amy', address: 'Apple st 652'},
    //         { name: 'Hannah', address: 'Mountain 21'},
    //         { name: 'Michael', address: 'Valley 345'},
    //         { name: 'Sandy', address: 'Ocean blvd 2'},
    //         { name: 'Betty', address: 'Green Grass 1'},
    //         { name: 'Richard', address: 'Sky st 331'},
    //         { name: 'Susan', address: 'One way 98'},
    //         { name: 'Vicky', address: 'Yellow Garden 2'},
    //         { name: 'Ben', address: 'Park Lane 38'},
    //         { name: 'William', address: 'Central st 954'},
    //         { name: 'Chuck', address: 'Main Road 989'},
    //         { name: 'Viola', address: 'Sideway 1633'}
    //       ];
    //   dbo.collection('users').insertMany(myobj, (err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //  console.log(`${res.insertedCount} User Inserted...!`)
    //  db.close();


    //                          Find()

    // var dbo = db.db("UserDB");
    // dbo.collection("users").find({}).toArray(function (err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })



//                                     query()

//     var dbo=db.db("UserDB");
//     var query = { address: "Montin 6" };
//     dbo.collection("users").find(query).toArray(function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });

//                             Sort()


// var dbo=db.db("UserDB");
// var mysort = { name: 1 };
//   dbo.collection("users").find().sort(mysort).toArray(function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });

//                                        deleteMany()

// var dbo=db.db("UserDB");
// var myquery = { address: /^O/ };
//   dbo.collection("users").deleteMany(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log(obj.result.n + " document(s) deleted");
//     db.close();
//   });


//                                          deleteOne()


// var dbo=db.db("UserDB");
// var myquery = { address: 'Mountain 21' };
// dbo.collection("users").deleteOne(myquery, function(err, obj) {
//   if (err) throw err;
//   console.log("1 document deleted");
//   db.close();
// });
// dropCollection()
// var dbo=db.db("UserDB");
// dbo.dropCollection("users", function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });


//                              updateOne()


// var dbo=db.db("UserDB");
// var myquery = { address: "Valley 345" };
// var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
// dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
//   if (err) throw err;
//   console.log("1 document updated");
//   db.close();
// });


//                                      updateMany()


// var dbo=db.db("UserDB");
// var myquery = { address: /^S/ };
//   var newvalues = {$set: {name: "Minnie"} };
//   dbo.collection("users").updateMany(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log(res.result.nModified + " document(s) updated");
//     db.close();
//   });
                    
//                                 Limit()


// var dbo=db.db("UserDB");
// dbo.collection("users").find().limit(5).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });


//                                 JOIN()


// var dbo=db.db("UserDB");
// dbo.collection('users').aggregate([
//     { $lookup:
//        {
//          from: 'users',
//          localField: 'user_id',
//          foreignField: '_id',
//          as: 'userdetails'
//        }
//      }
//     ]).toArray(function(err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
 })
