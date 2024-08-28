import { Request, Response } from 'express';
import Category from '../models/Category';

class CategoryController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      console.log(body);
      const data = await Category.create(body);
      res.status(201).json({ message: 'Category created successfully', data });
    } catch (error) {
      res.status(400).json({
        message: 'Category creation failed',
        error: (error as Error).message,
      });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await Category.find();
      data.sort((a, b) => a.nameCategory.localeCompare(b.nameCategory));
      res.status(200).json(data);
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error Get failed', error: (error as Error).message });
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await Category.findById(id);
      res.status(200).json(data);
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error Get failed', error: (error as Error).message });
    }
  }

  async updateOne(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      console.log(body);
      const data = await Category.updateOne({ _id: body._id }, { $set: body });
      res.status(200).json({ message: 'Category updated successfully', body });
    } catch (error) {
      res.status(400).json({
        message: 'Error Update failed',
        error: (error as Error).message,
      });
    }
  }

  async deleteOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await Category.deleteOne({ _id: id });
      res.status(200).json({ message: 'Category deleted successfully', data });
    } catch (error) {
      res.status(400).json({
        message: 'Error Delete failed',
        error: (error as Error).message,
      });
    }
  }
}

export default new CategoryController();
