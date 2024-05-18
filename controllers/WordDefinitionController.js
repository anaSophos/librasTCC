import WordDefinition from "../models/WordDefinition.js";

class WordDefinitionController {
    async create(req, res) {
        try {
            const body = req.body;
            await WordDefinition.create(body);
            res.status(201).json({ message: "WordDefinition created successfully" });
        } catch (error) {
            res.status(400).json({ message: "WordDefinition creation failed", error: error.message });
        }
    }
}

export default new WordDefinitionController();
