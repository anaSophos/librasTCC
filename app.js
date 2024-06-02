import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
const bodyParser = 'bodyParser'

const app = express();

app.use(
    express.urlencoded({limit: '90mb', extended: true })
);

app.use(express.json({ limit: '90mb', extended: true })); 
app.use(routes);

export default app;
