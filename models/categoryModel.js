import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Number,
    required: true,
  },
  // You can add more fields as needed for your category model
});

const Category = mongoose.model("Category", categorySchema);

const addCategory = async (categoryData) => {
  try {
    const existingCategory = await Category.findOne({
      categoryName: categoryData.categoryName,
    });

    if (existingCategory) {
      throw new Error("Category with the same name already exists");
    }
    const newCategory = new Category(categoryData);
    await newCategory.save();
    return newCategory;
  } catch (error) {
    throw error;
  }
};

const allCategory = async () => {
  console.log("first");
  try {
    const allCategory = await Category.find({});
    console.log(allCategory);
    return allCategory;
  } catch (error) {
    throw error;
  }
};

const getCategoryById = async (categoryId) => {
  try {
    const category = await Category.findOne({ categoryId: categoryId });
    console.log(category);
    console.log(category.length);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return; // Exit the function
    } else {
      return category;
    }
  } catch (err) {
    console.log("Error in getting category by id", err);
  }
};
export { Category, addCategory, allCategory, getCategoryById };
