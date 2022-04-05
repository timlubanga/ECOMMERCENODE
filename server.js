const express = require("express");
require("dotenv").config({ path: ".env" });
const databaseConnect = require("./dbConnection");
const userRouter = require("./Routes/userRoute");
const orderRouter = require("./Routes/orderRoute");
const app = express();

app.use(express.json());

try {
  databaseConnect();
} catch (error) {
  console.log(err);
}

app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", orderRouter);
let port = process.env.PORT;

app.listen(port, () => {
  console.log(`the sever is running on port ${port}`);
});
