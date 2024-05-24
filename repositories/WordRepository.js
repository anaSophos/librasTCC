const Word = require("../models/Word")

exports.getAllWords = async () =>{
    return await Word.find()
}

exports.create = async (wordData) => {
    const word = new Word(wordData);
    return await word.save();
};

exports.getWordByName = async (nameWord) => {
    return await Word.findOne({nameWord});
}