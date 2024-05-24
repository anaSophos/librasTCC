const WordDefinition = require("../models/WordDefinition");

exports.create = async (wordDefinitionData) => {
    const wordDefinition = new WordDefinition(wordDefinitionData);
    return await wordDefinition.save();
};

exports.findAll = async () => {
    return await WordDefinition.find();
};

exports.findById = async (id) => {
    return await WordDefinition.findById(id);
};

exports.findByWordId = async (wordId) => {
    return await WordDefinition.find(wordId);
}

exports.deleteById = async (id) => {
    return await WordDefinition.deleteOne({ _id: id });
};