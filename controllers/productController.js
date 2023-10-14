import { getCategoryById } from "../models/categoryModel.js";
import {
  Product,
  addProduct,
  productListByCategory,
} from "../models/productModel.js";

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

export const getProductByCategory = async (req, res) => {
  console.log("get product by category Id");

  try {
    const categoryId = parseInt(req.query.categoryId);
    console.log(categoryId);
    const category = await getCategoryById(categoryId);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return; // Exit the function
    }

    const productList = await productListByCategory(categoryId);

    if (productList.length === 0) {
      res.status(404).json({ message: "No products in this Category" });
    } else {
      res.json({
        categoryId,
        categoryName: category.categoryName,
        productList,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the products",
      error: error.message,
    });
  }
};
