const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongod = new MongoMemoryServer();

exports.testDatabaseConnect = async () => {
  if (process.env.NODE_ENV == "testing") {
    const uri = await mongod.getUri();

    mongoose
      .createConnection(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((conn) => {
        console.log("test database connected successfully");
        return dropDatabase();
      })
      .catch((err) => {
        console.log(`error occurred connecting to test db${err}`);
      });
  }
};

exports.databaseClose = () => {
  return mongoose.disconnect();
};

const dropDatabase = () => {
  return mongoose.connection.dropDatabase();
};
