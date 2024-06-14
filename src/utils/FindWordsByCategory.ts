import mongoose from 'mongoose';
import word from '../models/Word.ts';
import category from '../models/Category.ts';
export async function findWordsByCategory(categoryName: string) {
  try {
    return await word.aggregate([
      {
        $lookup: {
          from: 'categories',
          localField: 'wordDefinitions.category',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $unwind: '$category',
      },
      {
        $match: {
          'category.nameCategory': categoryName,
        },
      },
    ]);
  } catch (error) {
    console.error('Error finding words by category:', error);
  }
}
