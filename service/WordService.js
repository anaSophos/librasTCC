const WordRepository = require("../repositories/WordRepository")

exports.createWord = async (nameWord) => {
    const normalizedWordName = nameWord.toLowerCase();

    const existWord = await WordRepository.getWordByName(normalizedWordName);

    if(existWord){
        throw new Error(`A palavra "${normalizedWordName}" já existe`);
    }

    const wordData = {
        nameWord: normalizedWordName,
    };
    return await WordRepository.create(wordData);
};

exports.getAllWords = async () =>{
    const allWords = await WordRepository.getAllWords();

    const orderWords = allWords.sort((a, b) => {
        return a.nameWord.localeCompare(b.nameWord);
    });

    return await orderWords
}

exports.getAllWordsByName = async(wordName) =>{
    const normalizedWordName = wordName.toLowerCase();

    const existWord = await WordRepository.getWordByName(normalizedWordName);

    if(existWord){
        throw new Error(`A palavra "${normalizedWordName}" não está registrada no sistema!`);
    }

    return await existWord
}