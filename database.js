const { MongoClient } = require('mongodb');
const url =
"mongodb://localhost:27017/"
  const client = new MongoClient(url);

  const dbName = "HelloWorld"

  async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // the following code examples can be pasted here...

    // insert document
//     const insertResult = await collection.insertMany([{"name": "vaishu" }, { "lastName": "ahir" }, { "age": 35 }]);
// console.log('Inserted documents =>', insertResult);

// remove the document

// const deleteResult = await collection.deleteMany([{ data }]);
// console.log('Deleted documents =>', deleteResult);

let data = {
  name : "vaishnavi",
  lastName : "srivastava",
  age : "27",
  number : "929896351",
  city : "gonda"

}
     const insertResult = await collection.insertMany([data]);
 console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
  
    return 'done.';
  }


  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//  Notes :
// go to mongoDb website
// create a free MO cluster
// create a new user
// get the connection string
// install MongoDB compass

// install :
// npm i mongodb
// require('mongodb')
