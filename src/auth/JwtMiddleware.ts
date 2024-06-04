import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import { TypeUserDataDB } from '../@types/userData';

type User = Omit<TypeUserDataDB, 'password'>;

function JwtMiddleware(
  req: Request & { userData?: User },
  res: Response,
  next: NextFunction,
) {
  const headerToken = req.headers.authorization;
  if (!headerToken) {
    return res.status(401).send({ error: 'Token não informado' });
  }

  const [typeToken, token] = headerToken.split(' ');

  if (process.env.Secret === undefined) {
    return res
      .status(500)
      .json({ msg: 'Variável de ambiente Secret não definida' });
  }

  jwt.verify(token, process.env.Secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: 'Token Inválido', error: err });
    }
    req.userData = decoded as User;
    next();
  });
}

export default JwtMiddleware;
