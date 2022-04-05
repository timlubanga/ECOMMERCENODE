const OrderItem = require("../Models/orderModel");

// create a new order item record
exports.createOrderItem = (req, res, next) => {
  if (req.user) req.body.customerID = req.user._id;

  OrderItem.create(req.body)
    .then((order) => {
      res.status(201).json({
        status: "201",
        data: order,
      });
    })
    .catch((err) => {
      next(err);
    });
};

// fetches a customers order items
exports.getOrderItems = (req, res, next) => {
  let customerID = req.user._id;

  OrderItem.find({ customerID })
    .then((order) => {
      res.status(200).json({
        status: "200",
        data: order,
      });
    })
    .catch((err) => {
      next(err);
    });
};
