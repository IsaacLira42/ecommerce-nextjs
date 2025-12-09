import { Request, Response } from "express";
import { CartService } from "../services/Cart.service";
import { CreateCartSchema, UpdateCartSchema } from "../types/cart/cart.schema";

const cartService = new CartService();

export const createCart = async (req: Request, res: Response) => {
  try {
    const data = CreateCartSchema.parse(req.body);
    const cart = await cartService.create(data);
    return res.status(201).json(cart);
  } catch (error) {
    return res.status(400).json({
      error: "Falha ao tentar criar o carrinho",
    });
  }
};

export const updateCart = async (req: Request, res: Response) => {
  try {
    const data = UpdateCartSchema.parse(req.body);
    const cart = await cartService.update(data.id, data);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).json({
      error: "Falha ao tentar atualizar o carrinho",
    });
  }
};

export const getCartById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const cart = await cartService.findById(id);

    if (!cart) {
      return res.status(404).json({ error: "Carrinho não encontrado" });
    }

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar carrinho" });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const cart = await cartService.delete(id);

    if (!cart) {
      return res.status(404).json({ error: "Carrinho não encontrado" });
    }

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao remover carrinho" });
  }
};
