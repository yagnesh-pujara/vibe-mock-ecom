import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";

export const getCart = async (req, res) => {
    try {
        const cart = await CartItem.find().populate("productId");
        const items = cart.map(i => ({
            id: i._id,
            name: i.productId.name,
            price: i.productId.price,
            qty: i.qty,
            lineTotal: i.productId.price * i.qty,
        }));
        const total = items.reduce((sum, i) => sum + i.lineTotal, 0);
        res.json({ items, total });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch cart" });
    }
};

export const addToCart = async (req, res) => {
    const { productId, qty } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ error: "Product not found" });

        const newItem = new CartItem({ productId, qty });
        await newItem.save();
        res.status(201).json({ message: "Item added", item: newItem });
    } catch (err) {
        res.status(500).json({ error: "Failed to add item to cart" });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        await CartItem.findByIdAndDelete(req.params.id);
        res.json({ message: "Item removed" });
    } catch (err) {
        res.status(500).json({ error: "Failed to remove item" });
    }
};
