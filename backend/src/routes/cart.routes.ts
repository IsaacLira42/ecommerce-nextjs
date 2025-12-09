import { Router } from "express";
import {
  createCart,
  deleteCart,
  getCartById,
  updateCart,
} from "../controllers/cart.controller";

const router = Router();

router.post("/cart", createCart);
router.put("/cart", updateCart);
router.get("/cart/:id", getCartById);
router.delete("/cart/:id", deleteCart);

export default router;
