/** @format */

import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true },
);

const Item = mongoose.model("Item", ItemSchema);
export default Item;
