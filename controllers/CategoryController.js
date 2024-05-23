import Category from '../models/Category.js';
class CategoryController {
    async create(req, res) {
        try {
            const body = req.body
            await Category.create(body)
            res.status(201).json({ message: "Category created successfully" })
        } catch (error) {
            res.status(400).json({ message: "Category creation failed", error: error.message });
        }
    }

    async getAll (req,res){
        try {
            const data = await Category.find()
            res.status(200).json({data})
        } catch (error) {
            res.status(400).json({message:"Error Get failed",error:error.message})
        }
    }
}

export default new CategoryController();