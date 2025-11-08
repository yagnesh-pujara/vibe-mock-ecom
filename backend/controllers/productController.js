import axios from "axios";
import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        // If DB is empty, fetch from Fake Store API
        if (products.length === 0) {
            console.log("Fetching products from Fake Store API...");
            const { data } = await axios.get("https://fakestoreapi.com/products");

            // Transform & store into MongoDB
            const formatted = data.map(p => ({
                id: p.id,
                name: p.title,
                price: p.price,
                image: p.image,
                description: p.description,
            }));

            products = await Product.insertMany(formatted);
            console.log(`Imported ${products.length} products`);
        }
        res.json(products);
    } catch (err) {
        console.error("Product fetch error:", err.message);
        res.status(500).json({ error: "Failed to load products" });
    }
};

export const refreshProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        const { data } = await axios.get("https://fakestoreapi.com/products");
        const formatted = data.map(p => ({
            id: p.id,
            name: p.title,
            price: p.price,
            image: p.image,
            description: p.description,
        }));
        const products = await Product.insertMany(formatted);
        res.json({ message: `Refreshed ${products.length} products` });
    } catch (err) {
        res.status(500).json({ error: "Failed to refresh products" });
    }
};
