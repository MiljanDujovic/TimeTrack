var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://miljan123:miljan123@cluster0.9usha.mongodb.net/TimeTrackApp?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  var dbo = db.db("TimeTrackApp");
  var TimeTrackApp = [
    { Id: 1, Email: 'admin', Password: 'admin'}, 
    { Id: 2, Email: 'Desanka', Password: 'sifra'},
    { Id: 3, Email: 'Nadezda', Password: 'sifra'},
    { Id: 4, Email: 'Milunka', Password: 'sifra'},
    
  ];
  dbo.collection("Users").insertMany(TimeTrackApp, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

});
