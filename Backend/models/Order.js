import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      qty: Number
    }
  ],
  customerName: String,
  phone: String,
  tableNo: Number,
  paymentMethod: String,
  total: Number
});

export default mongoose.model("Order", orderSchema);
