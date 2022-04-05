const express = require("express");
const { createOrderItem ,getOrderItems} = require("../Controllers/orderController");
const { authenticate } = require("../Controllers/authController");

const router = express.Router();

router.route("/create_orderitem").post(authenticate, createOrderItem);
router.route("/getorders").post(authenticate, getOrderItems);
module.exports = router;
