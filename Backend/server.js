import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

export default app;