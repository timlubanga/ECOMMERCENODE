const express = require("express")

const app = express();

app.use(express.json());



app.get('/', (req, res, next) => {
    res.json("hello").status(200)
    next();
  });
  
let port=3000

app.listen(port, () => {
console.log(`the sever is running on port ${port}`
    );
  });



