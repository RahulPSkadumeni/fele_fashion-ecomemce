import { addCategory, allCategory } from "../models/categoryModel.js";

const addNewCategory = async (req, res) => {
  console.log("add");
  const categoryData = req.body;
  console.log(req.body);
  console.log("first");
  try {
    const newCategory = await addCategory(categoryData);

    res.status(201).json(newCategory); // Respond with the newly created category
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add a new category", error: error.message });
  }
};

export { addNewCategory };

export const getCategory = async (req, res) => {
  console.log(" get all category");

  try {
    const categoryList = await allCategory();
    res.status(200).json(categoryList);
  } catch (error) {
    res.status(500).json(error);
  }
};
