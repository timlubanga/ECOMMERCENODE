const moongose = require("mongoose");
const validator = require("validator");
orderItemSchema = moongose.Schema({
  name: {
    type: String,
    required: [true, "Please provide order name"],
    validate: [validator.isAlpha, "A an order name cannot have a number"],
  },

  unitPrice: {
    type: Number,
    required: [true, "Please provide order unit price"],
  },
  customerID: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User",
    required: [
      true,
      "please provide customer id associated with the orderitem",
    ],
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

orderItemSchema.pre(/^find/, function () {
  this.populate("customerID");
});
const OrderItem = moongose.model("Orderitem", orderItemSchema);

module.exports = OrderItem;
