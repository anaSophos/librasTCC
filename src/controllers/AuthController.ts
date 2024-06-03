import Usuario from '../models/User';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { TypeUserData, TypeUserDataDB } from '../@types/userData';
import Role from '../models/Role';
import getRoleById from '../Utils/GetRoleByID';

class AuthController {
  async signUp(req: Request, res: Response) {
    const { userName, password, role } = req.body;
    try {
      await Usuario.findOne({ userName: userName }).then((response) => {
        if (response) {
          return res.status(409).json({ error: 'O usuário já existe' });
        } else {
          bcrypt.hash(
            password,
            10,
            async (err: Error | undefined, hash: string) => {
              const usuario = {
                userName,
                password: hash,
                role,
              };
              await Usuario.create(usuario).then((response) => {
                if (!response) {
                  return res
                    .status(400)
                    .json({ msg: 'Erro ao registrar  Usuario' });
                } else {
                  res
                    .status(201)
                    .json({ msg: 'Usuário registrado com sucesso' });
                }
              });
            },
          );
        }
      });
    } catch (error) {
      return res
        .status(400)
        .json({ msg: 'Erro ao cadastrar Usuario', err: error });
    }
  }
  async signIn(req: Request & { userData?: TypeUserData }, res: Response) {
    const { userName, password } = req.body;
    try {
      const response: TypeUserDataDB | null = await Usuario.findOne({
        userName: userName,
      });

      if (!response) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const isPasswordValid = await bcrypt.compare(password, response.password);

      if (!isPasswordValid) {
        return res.status(401).json({ msg: 'Credenciais inválidas' });
      }

      if (process.env.SECRET === undefined) {
        return res
          .status(500)
          .json({ msg: 'Variável de ambiente Secret não definida' });
      }

      const token = jwt.sign(
        {
          userId: response._id,
          userName: response.userName,
          role: response.role,
        },
        process.env.SECRET,
      );

      return res.status(201).json({
        token: token,
      });
    } catch (error) {
      res.status(500).json({ msg: 'Erro interno do servidor', err: error });
    }
  }

  async dataToken(req: Request & { userData?: TypeUserDataDB }, res: Response) {
    if (!req.userData?.role) {
      return res.status(422).json({ msg: 'Role is undefined' });
    }
    const data = await getRoleById(req.userData?.role);
    if (!data) {
      return res.status(404).json({ msg: 'Role not found' });
    }
    return res.status(200).json({ dataToken: req.userData, role: data });
  }
}

export default new AuthController();
