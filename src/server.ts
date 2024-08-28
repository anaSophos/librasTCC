import { startDB } from './db/mongoDB.ts';
import Loaders from './db/Loaders.ts';

const dbStarters = {
  mongoDB: startDB,
};

const loaders = new Loaders(dbStarters);
loaders.start();
