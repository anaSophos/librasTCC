import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from '../app.ts';

dotenv.config();

mongoose.set('strictQuery', true);

//const url = `mongodb://${process.env.ADDRESS_DATA_BASE}:${process.env.PORT_URL}/Libras`;
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kmqc4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function startDB() {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(url);
    console.log('Conectado ao MongoDB!');
    app.listen(process.env.PORT);
  } catch (error) {
    console.log(error);
  }
}

export { startDB };
