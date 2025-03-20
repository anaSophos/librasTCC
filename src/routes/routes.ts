import express from 'express';
const router = express.Router();

import WordController from '../controllers/WordController.ts';
import CategoryController from '../controllers/CategoryController.ts';
import SuggestionController from '../controllers/SuggestionController.ts';
import AuthController from '../controllers/AuthController';
import PermissionController from '../controllers/PermissionController';
import RoleController from '../controllers/RoleController';
import JwtMiddleware from '../auth/JwtMiddleware.ts';

// Rotas para palavras (words)
router.post('/word', WordController.create);
router.post('/word/update', WordController.updateWordFull);
router.get('/word', WordController.getAll);
router.get('/word/category/:category', WordController.findByCategory);
router.get('/word/:name', WordController.findOne);
router.get('/word_id/:id', WordController.findOneId);
router.put('/word_id/:id/signal', WordController.updateOneaddWordDefinition);
router.put('/word/:id', WordController.updateOne);
router.delete('/word/:id', WordController.deleteOne);

// Adicionando a rota de busca para `word`
router.get('/word/search/:query', WordController.search);

// Rotas para sugestões (suggestions)
router.post('/suggestion', SuggestionController.create);
router.get('/suggestion', SuggestionController.getAll);
router.get('/suggestion/:name', SuggestionController.findOne);
router.get('/suggestion_id/:id', SuggestionController.findOneId);
router.put('/suggestion/:id', SuggestionController.updateOne);
router.put(
  '/suggestion_id/:id/signal',
  SuggestionController.updateOneaddWordDefinition,
);
router.delete('/suggestion/:id', SuggestionController.deleteOne);

// Rotas para categorias (categories)
router.get('/category', CategoryController.getAll);
router.post('/category', CategoryController.create);
router.put('/category/:id', CategoryController.updateOne);
router.get('/category/:id', CategoryController.findOne);
router.delete('/category/:id', CategoryController.deleteOne);
router.get('/category_showInMenu', CategoryController.findByShowInMenu);

// Rotas de autenticação
router.post('/signUp', AuthController.signUp);
router.post('/login', AuthController.signIn);
router.post('/payloadToken', JwtMiddleware, AuthController.dataToken);

// Rotas para papéis e permissões
router.post('/role', RoleController.create);
router.post('/permission', PermissionController.create);

// Rota de teste
router.get('/', (req, res) => {
  res.json({ msg: 'ta rodando pai' });
  console.log('hi');
});

export default router;
