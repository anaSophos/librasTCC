const WordService = require("../service/WordService");

exports.allWords = async(req, res) => {
    try{
        const words = await WordService.getAllWords();
        res.status(200).json(words)
    }catch(error){
        res.status(500).json({ message: "Erro ao listar as Palavras do sistema!", error: error.message });
    }
};

exports.createWord = async(req, res) => {
    try{
        const {nameWord} = req.body

        const word = await WordService.createWord(nameWord);

        res.status(200).json({ word, msg: "Nova Palavra registrada com sucesso!" });
    }catch(error){
        res.status(500).json({ message: "Erro ao salvar nova Palavra!", error: error.message });
    }
}