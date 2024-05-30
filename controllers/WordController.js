import Word from '../models/Word.js';

class WordController {
    async create(req, res) {
        try {
            const body = req.body;
            const a =await Word.create(body)
            console.log(a)
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
    async findOne(req, res) {
        try {
            const { name } = req.params;
            console.log(name)
            const word = await Word.findOne({ nameWord: name }).populate('wordDefinitions.category');
            
            if (word === null) {
                return res.status(200).json([]);
            }
    
            res.status(200).json([word]);
        } catch (error) {
            return res.status(400).json({ message: "Error Get one failed", error: error.message });
        }
    }
    async findOneId(req, res) {
        try {
            const { id } = req.params;
            console.log(id)
            const word = await Word.findOne({ _id: id })
            if (word === null) {
                return res.status(200).json();
            }
            // word.wordDefinitions.map((item)=>{
            //     console.log(item)
            // })
            res.status(200).json(word);
        } catch (error) {
            return res.status(400).json({ message: "Error Get one failed", error: error.message });
        }
    }
    async updateOneaddWordDefinition(req, res) {
        try {
            const { id } = req.params;
            const body = req.body;
            const word = await Word.findOne({ _id: id })

            if (word === null) {
                return res.status(200).json();
            }
            word.wordDefinitions.push(body.wordDefinitions[0])
            const addWordDefinitions = await Word.updateOne({_id: id}, {$set: word})
            res.status(200).json(addWordDefinitions);
        } catch (error) {
            return res.status(400).json({ message: "Error Get one failed", error: error.message });
        }
    }
    
    async updateOne (req, res){
        try {
            const {id} = req.params
            const body = req.body


        if (body.wordDefinitions && Array.isArray(body.wordDefinitions)) {
            body.wordDefinitions = body.wordDefinitions.map(definition => {
                if (definition.category && definition.category._id) {
                    definition.category = definition.category._id; 
                }
                return definition;
            });
        }

            const word = await Word.updateOne({_id: id},{$set: body})
            res.status(200).json({message:"Word updated successfully",word})    
        } catch (error) {
            res.status(400).json({message:"Error Update one failed",error:error.message})
        }
    }
}

export default new WordController();
