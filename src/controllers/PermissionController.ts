import Permission from '../models/Permission';
import { Request, Response } from 'express';

class PermissionController {
  async create(req: Request, res: Response) {
    try {
      const body = req.body;
      const response = await Permission.create(body);
      res
        .status(201)
        .json({ msg: 'permission created successfully', response });
    } catch {
      res
        .status(500)
        .json({ message: 'Error occurred while fetching permissions' });
    }
  }
}

export default new PermissionController();
