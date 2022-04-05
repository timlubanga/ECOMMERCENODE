const express = require("express");
require("dotenv").config({ path: ".env" });
const databaseConnect = require("./dbConnection");
const userRouter = require('./Routes/userRoute');
const app = express();

app.use(express.json());

try {
  databaseConnect();
} catch (error) {
  console.log(err);
}

app.use('/api/v1/users', userRouter);
let port = 3000;

app.listen(port, () => {
  console.log(`the sever is running on port ${port}`);
});
