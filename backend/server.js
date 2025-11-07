import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import apiRoutes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
connectDB();

// API Routes
app.use("/api", apiRoutes);

// Sample Route
app.get("/", (req, res) => res.send("API is running 🚀"));

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/`)
});