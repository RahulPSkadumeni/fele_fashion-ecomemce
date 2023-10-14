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
  try {
    const allCategory = await Category.find({});
    return allCategory;
  } catch (error) {
    throw error;
  }
};
export { Category, addCategory, allCategory };
