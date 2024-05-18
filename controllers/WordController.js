import Word from '../models/Word.js';

class WordController {
    async create(req, res) {
        try {
            const body = req.body;
            await Word.create(body);
            res.status(201).json({ message: "Word created successfully" });
        } catch (error) {
            res.status(400).json({ message: "Word creation failed", error: error.message });
        }
    }
}

export default new WordController();
