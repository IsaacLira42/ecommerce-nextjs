import { Request, Response } from "express";
import { ProductService } from "../services/Product.service";

const productService = new ProductService();

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao listar os produtos",
    });
  }
};
