import express from 'express';
const router = express.Router();

import WordController from '../controllers/WordController.ts';
import CategoryController from '../controllers/CategoryController.ts';

router.post('/word', WordController.create);
router.get('/word', WordController.getAll);
router.get('/word/:name', WordController.findOne);
router.get('/word_id/:id', WordController.findOneId);
router.put('/word_id/:id/signal', WordController.updateOneaddWordDefinition);
router.put('/word/:id', WordController.updateOne);

router.get('/category', CategoryController.getAll);
router.post('/category', CategoryController.create);
router.put('/category/:id', CategoryController.updateOne);
router.get('/category/:id', CategoryController.findOne);
router.delete('/category/:id', CategoryController.deleteOne);

import AuthController from '../controllers/AuthController';
import PermissionController from '../controllers/PermissionController';
import RoleController from '../controllers/RoleController';
import JwtMiddleware from '../auth/JwtMiddleware.ts';

router.post('/signUp', AuthController.signUp);
router.get('/login', AuthController.signIn);
router.get('/payloadToken', JwtMiddleware, AuthController.dataToken);

router.post('/role', RoleController.create);
router.post('/permission', PermissionController.create);

router.get('/', (req, res) => {
  res.json({ msg: 'ta rodando pai' });
  console.log('hi');
});

export default router;
