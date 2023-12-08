import { Request, Response } from "express"
import Product from "../models/product.model"

// READ - Obter todos os produtos
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
