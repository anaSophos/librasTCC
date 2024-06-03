import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import { TypeUserData } from '../@types/userData';

function jwtMiddleware(
  req: Request & { userData: TypeUserData },
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
    } else {
      console.log(decoded);
      req.userData = decoded as TypeUserData;
      next();
    }
  });
}

module.exports = jwtMiddleware;
