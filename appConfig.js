const express = require("express");
const userRouter = require("./Routes/userRoute");
const orderRouter = require("./Routes/orderRoute");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", orderRouter);

module.exports = app;
