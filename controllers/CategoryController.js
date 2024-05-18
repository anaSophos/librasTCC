import Category from '../models/Category';

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
}

export default new CategoryController();