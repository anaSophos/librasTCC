const CategoyRepository = require("../repositories/CategoryRepository")

exports.createCategoy = async(nameCategory, descriptionCategory)=>{
    const normalizedCategoryName = nameCategory.toLowerCase();

    const existCategory = await CategoyRepository.getCategoryByName(normalizedCategoryName);

    if(existCategory){
        throw new Error(`Categoria "${normalizedCategoryName}" já existe`);
    }
    const categoyData = {
        nameCategory: normalizedCategoryName,
        descriptionCategory,
    }
    return await CategoyRepository.create(categoyData)
}

exports.getAllCategories = async () =>{
    const allCategories = await CategoyRepository.getAllCategories();

    const orderCategories = allCategories.sort((a, b) => {
        return a.nameCategory.localeCompare(b.nameCategory);
    });

    return await orderCategories
}