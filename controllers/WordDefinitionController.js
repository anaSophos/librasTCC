const WordDefinition = require("../models/WordDefinition")
const wordDefinitionService = require("../service/WordDefinitionService");

const fs = require("fs")

exports.create = async(req, res) =>{
    try{
        const {descriptionWordDefinition, categoryId, wordId, isNewWord, newWord} = req.body;
        const file = req.file ? req.file.path : null;

        const wordDefinition = await wordDefinitionService.createWordDefinition(descriptionWordDefinition, categoryId, wordId, isNewWord, newWord, file);

        res.status(200).json({ wordDefinition, msg: "Novo significado registrado com sucesso!" });
    }catch(error){
        if (req.file) {
            fs.unlink(req.file.path, (err) => {
                if (err) console.error("Erro ao deletar o arquivo:", err);
            });
        }
        res.status(500).json({ message: "Erro ao salvar novo significado!", error: error.message });
    }
};


exports.allWordDefinitions = async(req, res) => {
    try{
        const wordDefinitions = await WordDefinition.find();

        res.status(200).json(wordDefinitions)
    }catch (error){
        res.status(500).json({message: "Erro ao buscar significado"})
    }
};

//controller para quando as palavras são listadas e é selecionado uma palavra e mostra-se os sinais
//USADA NA PAGINA "LISTA DE TODAS AS PALAVRAS DO SISTEMA" DO FIGMA
exports.allWordDefinitionByWordId = async(req, res) =>{
    try{
        const wordDefinitions = await wordDefinitionService.allWordDefinitionByWordId(req.params.id)
        res.status(200).json(wordDefinitions)
    }catch(error){
        res.status(500).json({message: "Erro ao buscar os sinais da palavra pesquisada", error: error.message})
    }
}

//controller para procurar os sinais através da pesquisa no INPUT PRINCIPAL
exports.searchByWordName = async(req, res) =>{
    try{
        const {nameword} = req.query;
        console.log(nameword)
        const wordDefinitions = await wordDefinitionService.allWordDefinitionByWordName(req.params.nameWord)
        res.status(200).json(wordDefinitions)
    }catch(error){
        res.status(500).json({message: "Erro ao buscar os sinais da palavra pesquisada", error: error.message})
    }
}

exports.remove = async (req, res) => {
    try {
        await wordDefinitionService.removeWordDefinitionById(req.params.id);
        res.status(200).json({ message: "Significado removido com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir significado.", error: error.message });
    }
};