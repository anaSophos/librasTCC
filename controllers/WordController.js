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

    async getAll(req,res){
        try {
            const words = await Word.find().populate('wordDefinitions.category');
            res.status(200).json(words)
        } catch (error) {
            res.status(400).json({message:"Error Get failed",error:error.message})
        }
    }
    async findOne(req,res){
        try {
            const {name} = req.params
            console.log()
            const word = await Word.findOne({nameWord:name}).populate('wordDefinitions.category')
            res.status(200).json([word])
        } catch (error) {
            res.status(400).json({message:"Error Get one failed",error:error.message})
        }
    }
    async UpdateOne (req, res){
        try {
            const {id} = req.params
            const word = await Word.updateOne({_id: id})
            res.status(200).json({message:"Word updated successfully",word})    
        } catch (error) {
            res.status(400).json({message:"Error Update one failed",error:error.message})
        }
    }
}

export default new WordController();
