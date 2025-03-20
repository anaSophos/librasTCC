import { Request, Response } from 'express';
import Fuse from 'fuse.js';
import Word from '../models/Word';
import { findWordsByCategory } from '../utils/FindWordsByCategory.ts';

class WordController {
  async create(req: Request, res: Response) {
    try {
      const body = req.body;
      console.log('entrou aui');
      console.log(body);
      const a = await Word.create(body);
      console.log(a + 'passou tem algo');
      res.status(201).json({ message: 'Word created successfully' });
    } catch (error) {
      console.log((error as Error).message);
      res.status(400).json({
        message: 'Word creation failed',
        error: (error as Error).message,
      });
    }
  }
  async updateWordFull(req: Request, res: Response) {
    try {
      const body = req.body;
      console.log('entrou updatedword');
      console.log(body);
      const a = await Word.updateOne(
        { _id: req.body._id },
        { $set: body },
        {
          new: true,
        },
      );
      console.log(a + 'passou tem algo');
      res.status(201).json({ message: 'Word created successfully' });
    } catch (error) {
      console.log((error as Error).message);
      res.status(400).json({
        message: 'Word creation failed',
        error: (error as Error).message,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const words = await Word.find().populate('wordDefinitions.category');
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
      const word = await Word.findOne({ nameWord: name }).populate(
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
      console.log(id);
      const word = await Word.findOne({ _id: id });
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
      const word = await Word.findOne({ _id: id });

      if (word === null) {
        return res.status(200).json();
      }
      word.wordDefinitions.push(body.wordDefinitions[0]);
      const addWordDefinitions = await Word.updateOne(
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

      const word = await Word.updateOne({ _id: id }, { $set: body });
      res.status(200).json({ message: 'Word updated successfully', word });
    } catch (error) {
      res.status(400).json({
        message: 'Error Update one failed',
        error: (error as Error).message,
      });
    }
  }

  async findByCategory(req: Request, res: Response) {
    try {
      const category = req.params.category;
      console.log(category);
      const words = await findWordsByCategory(category);
      console.log(words);
      res.status(200).json(words);
    } catch (error) {
      res.status(500).json({
        message: 'Error find category failed',
        error: (error as Error).message,
      });
    }
  }

  async deleteOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await Word.deleteOne({ _id: id });
      res.status(200).json({ message: 'Category deleted successfully', data });
    } catch (error) {
      res.status(400).json({
        message: 'Error Delete failed',
        error: (error as Error).message,
      });
    }
  }

  // Novo método de busca
  async search(req: Request, res: Response) {
    try {
      const query = req.params.query;

      const words = await Word.find();

      const fuseOptions = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: ['nameWord'],
      };

      const fuse = new Fuse(words, fuseOptions);

      res.status(200).json(fuse.search(query));
    } catch (error) {
      res.status(500).json({
        message: 'Error Search failed',
        error: (error as Error).message,
      });
    }
  }
}

export default new WordController();
