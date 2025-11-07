import express from "express";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";
import checkoutRoutes from "./checkoutRoutes.js";
import authRoutes from "./authRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/checkout", checkoutRoutes);

export default router;
