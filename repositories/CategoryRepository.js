const Category = require("../models/Category")

exports.create = async (categoryData) => {
    const category = new Category(categoryData)
    return await category.save();
}

exports.getCategoryByName = async (nameCategory) => {
    return await Category.findOne({nameCategory});
}

exports.getAllCategories = async () =>{
    return await Category.find()
}

exports.deleteById = async (id) => {
    return await Category.deleteOne({ _id: id });
};