const dbConnect = require('mongodb');

// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);

/*const { MongoClient } = require('mongodb');
//const  MongoClient  = require('mongodb').MongoClient;// same as above
const url = 'mongodb://localhost:27017'; //mongodb path
const database = 'e-comm';
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection('products');
  //let collection = db.collection('products');
  //let data = await collection.find({ name: 'm 40' }).toArray();
  //console.log(data);
}   */

//getData();
//dbConnect();
//console.warn(dbConnect());  //gives promise

/*dbConnect().then((resp) => {
  //console.warn(resp.find().toArray());  // returns promise
  resp.find().toArray().then((data) => {
      console.warn(data);
    });
});*/

const main = async () => {
  //console.log('main function called');
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};

main();
