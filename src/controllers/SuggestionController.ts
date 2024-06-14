import Suggestion from '../models/Suggestion.ts';
import { Request, Response } from 'express';

class SuggestionController {
  async create(req: Request, res: Response) {
    try {
      const body = req.body;
      console.log(body);
      const a = await Suggestion.create(body);
      console.log(a);
      res.status(201).json({ message: 'suggestion created successfully' });
    } catch (error) {
      res.status(400).json({
        message: 'Word creation failed',
        error: (error as Error).message,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const words = await Suggestion.find().populate(
        'wordDefinitions.category',
      );
      res.status(200).json(words);
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Error Get failed', error: (error as Error).message });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { name } = req.params;
      console.log(name);
      const word = await Suggestion.findOne({ nameWord: name }).populate(
        'wordDefinitions.category',
      );

      if (word === null) {
        return res.status(200).json([]);
      }

      res.status(200).json([word]);
    } catch (error) {
      return res.status(400).json({
        message: 'Error Get one failed',
        error: (error as Error).message,
      });
    }
  }
  async findOneId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const word = await Suggestion.findOne({ _id: id });
      if (word === null) {
        return res.status(200).json();
      }
      res.status(200).json(word);
    } catch (error) {
      return res.status(400).json({
        message: 'Error Get one failed',
        error: (error as Error).message,
      });
    }
  }

  async updateOneaddWordDefinition(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body = req.body;
      const word: any = await Suggestion.findOne({ _id: id });

      if (word === null) {
        return res.status(200).json();
      }
      word.wordDefinitions.push(body.wordDefinitions[0]);
      const addWordDefinitions = await Suggestion.updateOne(
        { _id: id },
        { $set: word },
      );
      res.status(200).json(addWordDefinitions);
    } catch (error) {
      return res.status(400).json({
        message: 'Error Get one failed',
        error: (error as Error).message,
      });
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body = req.body;

      if (body.wordDefinitions && Array.isArray(body.wordDefinitions)) {
        body.wordDefinitions = body.wordDefinitions.map((definition: any) => {
          if (definition.category && definition.category._id) {
            definition.category = definition.category._id;
          }
          return definition;
        });
      }

      const word = await Suggestion.updateOne({ _id: id }, { $set: body });
      res
        .status(200)
        .json({ message: 'suggestion updated successfully', word });
    } catch (error) {
      res.status(400).json({
        message: 'Error Update one failed',
        error: (error as Error).message,
      });
    }
  }
  async deleteOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await Suggestion.deleteOne({ _id: id });
      res.status(200).json({ message: 'Category deleted successfully', data });
    } catch (error) {
      res.status(400).json({
        message: 'Error Delete failed',
        error: (error as Error).message,
      });
    }
  }
}

export default new SuggestionController();
