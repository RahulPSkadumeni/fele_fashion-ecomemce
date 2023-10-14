import express from "express";
import {
  addNewProduct,
  getProductByCategory,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/save", addNewProduct);
router.get("/list", getProductByCategory);
export default router;
