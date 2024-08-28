import Role from '../models/Role';
import { Response, Request } from 'express';

class RoleController {
  async create(req: Request, res: Response) {
    try {
      const body = req.body;
      const response = await Role.create(body);
      res
        .status(201)
        .json({ msg: 'permission created successfully', response });
    } catch {
      res.status(500).json({ msg: 'error creating permission' });
    }
  }
}

export default new RoleController();
