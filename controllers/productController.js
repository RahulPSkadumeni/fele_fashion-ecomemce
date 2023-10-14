import { Product, addProduct } from "../models/productModel.js";

export const addNewProduct = async (req, res) => {
  console.log("adding new product");
  const productData = req.body;
  try {
    const product = await addProduct(productData);
    res.status(201).json("Product saved successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add a new product", error: error.message });
  }
};
