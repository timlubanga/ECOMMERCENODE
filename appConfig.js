const express = require("express");
const userRouter = require("./Routes/userRoute");
const orderRouter = require("./Routes/orderRoute");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");

const app = express();

//setting security http headers
app.use(helmet());
//rate limiting to prevent two many requests and brute force attack
const rateLimiter = rateLimit({
  max: 5000,
  windowMs: 60 * 60 * 1000,
});

app.use("/api", rateLimiter);
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
//data sanitization, against nosql query injection
app.use(mongoSanitize());
//data sanitization, against xss attacks
app.use(xssClean());

//prevent parameter pollution
app.use(hpp());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", orderRouter);

module.exports = app;
