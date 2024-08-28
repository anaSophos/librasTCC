import User from '../models/User';
import Usuario from '../models/User';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { TypeUserData, TypeUserDataDB } from '../@types/userData';

class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const response = await User.create();
    res.status(201).json({ message: 'User created successfully' });
  }
}
