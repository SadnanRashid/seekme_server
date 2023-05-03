const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

let client = null;

const connectDatabase = () => {
  if (client === null) {
    const uri = `mongodb+srv://admin:12345sad@cluster0.nx7ynwz.mongodb.net/?retryWrites=true&w=majority`;
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
  }
  return client;
};

const getCollection = (collection) => {
  const client = connectDatabase();
  return client.db("seekme").collection(collection);
};

const checkConnection = () => {
  const status = connectDatabase().serverStatus();
  console.log(status);
  return status;
};

module.exports = {
  getCollection,
  checkConnection,
};
