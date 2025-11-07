import express from "express";
import { getProducts, refreshProducts } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProducts);
router.get("/refresh", protect, refreshProducts);

export default router;
