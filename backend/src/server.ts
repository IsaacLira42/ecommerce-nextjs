import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes";
import cartRoutes from "./routes/cart.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", cartRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
