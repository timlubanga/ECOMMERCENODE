const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();


const testDatabaseConnect = () => {
    if (process.env.NODE_ENV == 'testing') {
      const uri = await mongod.getUri();
      
      mongoose
        .connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then((res) => {
          console.log("test database connected successfully")

        }).catch((err) => {
            console.log(`error occurred connecting to test db${err}`)
        })
    }
};


module.exports=testDatabaseConnect