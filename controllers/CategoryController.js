const CategoryService = require("../service/CategoryService")

exports.createCategoy = async(req, res) => {
    try{
        const {nameCategory, descriptionCategory} = req.body

        const category = await CategoryService.createCategoy(nameCategory, descriptionCategory)

        res.status(200).json({ category, msg: "Nova Categoria registrada com sucesso!" });
    }catch(error){
        res.status(500).json({ message: "Erro ao salvar nova Categoria!", error: error.message });
    }
}

exports.allCategories = async(req, res) => {
    try{
        const categories = await CategoryService.getAllCategories();
        res.status(200).json(categories)
    }catch(error){
        res.status(500).json({ message: "Erro ao listar Categorias!", error: error.message });
    }
}

exports.deleteCategory = async(req, res) => {
    try{
    }catch(error){
        res.status(500).json({ message: "Erro ao excluir Categorias!", error: error.message });
    }
}