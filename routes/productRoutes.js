import express from "express";
import { addNewProduct } from "../controllers/productController.js";
const router = express.Router();

router.post("/save", addNewProduct);

export default router;
