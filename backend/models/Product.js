import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image: String,
    description: String,
});

export default mongoose.model("Product", productSchema);
