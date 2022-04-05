const express = require("express")
require('dotenv').config({ path: '.env' });
const databaseConnect=require("./dbConnection")
const app = express();

app.use(express.json());

try {

  databaseConnect()
  
} catch (error) {
  console.log(err)
  
}


app.get('/', (req, res, next) => {
    res.json("hello").status(200)
    next();
  });
  
let port=3000

app.listen(port, () => {
console.log(`the sever is running on port ${port}`
    );
  });



