import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Number,
    required: true,
  },
});

// Create a model for the product
const Product = mongoose.model("Product", productSchema);

const addProduct = async (productData) => {
  console.log("adding product  inside model");
  console.log(productData.productName);
  try {
    const existingProduct = await Product.findOne({
      productName: productData.productName,
    });

    console.log(existingProduct);
    if (existingProduct) {
      throw new Error("product with the same name already exists");
    }
    const newProduct = new Product(productData);
    await newProduct.save();
    return newProduct;
  } catch (error) {
    throw error;
  }
};
export { Product, addProduct };
