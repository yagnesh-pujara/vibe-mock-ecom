import CartItem from "../models/CartItem.js";

export const checkout = async (req, res) => {
    const { name, email } = req.body;

    try {
        const cart = await CartItem.find().populate("productId");
        if (!cart.length) return res.status(400).json({ error: "Cart is empty" });

        const items = cart.map(i => ({
            name: i.productId.name,
            price: i.productId.price,
            qty: i.qty,
            lineTotal: i.productId.price * i.qty,
        }));

        const total = items.reduce((sum, i) => sum + i.lineTotal, 0);

        const receipt = {
            name,
            email,
            items,
            total,
            timestamp: new Date().toISOString(),
        };

        await CartItem.deleteMany();
        res.json({ receipt });
    } catch (err) {
        res.status(500).json({ error: "Checkout failed" });
    }
};
