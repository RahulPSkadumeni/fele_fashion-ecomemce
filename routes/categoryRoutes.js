import express from "express";
import {
  addNewCategory,
  getCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

// // Add a new category
router.post("/categories", addNewCategory);

router.get("/categories", getCategory);

// router.post("/categories", async (req, res) => {
//   console.log("hello");

//   res.status(200).json("success");
// });

export default router;
