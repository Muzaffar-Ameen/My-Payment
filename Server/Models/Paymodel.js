const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  amount: Number,
  method: String,
  card: String,
  expiry: String,
  cvv: String,
  notes: String,
});

const PaymentModel = mongoose.model("payments", PaymentSchema);
module.exports = PaymentModel;
