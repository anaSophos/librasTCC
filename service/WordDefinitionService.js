const wordDefinitionRepository = require("../repositories/WordDefinitionRepository");
const wordService = require("../service/WordService")

const fs = require("fs")

exports.createWordDefinition = async (descriptionWordDefinition, categoryId, wordId, isNewWord, newWord, file) => {
    let wordID = wordId;
    const normalizedDescriptionWordDefinition = descriptionWordDefinition.toLowerCase();

    if(isNewWord == 'true'){
        const wordNew = await wordService.createWord(newWord)
        wordID = wordNew._id
    }

    const wordDefinitionData = {
        descriptionWordDefinition: normalizedDescriptionWordDefinition,
        categoryId: categoryId,
        wordId: wordID,
    };
    if (file) {
        wordDefinitionData.src = file;
    }

    const wordDefinition = await wordDefinitionRepository.create(wordDefinitionData);

    return wordDefinition;
};

exports.removeWordDefinitionById = async (id) => {
    const wordDefinition = await wordDefinitionRepository.findById(id);
    if (!wordDefinition) {
        throw new Error("Significado não encontrado");
    }

    // Verifica se o arquivo existe antes de tentar excluí-lo
    if (fs.existsSync(wordDefinition.src)) {
        fs.unlinkSync(wordDefinition.src);
    } else {
        console.log(`Arquivo não encontrado: ${wordDefinition.src}`);
    }

    return await wordDefinitionRepository.deleteById(id);
};

exports.allWordDefinitionByWordId = async(wordId) =>{
    const wordDefinitions = await wordDefinitionRepository.findByWordId(wordId);
    return await wordDefinitions;
}

exports.allWordDefinitionByWordName = async(wordName) => {
    const word = await wordService.getAllWordsByName(wordName);
    console.log(word)
    let wordID = word._id;
    return await this.allWordDefinitionByWordId(wordID);
}