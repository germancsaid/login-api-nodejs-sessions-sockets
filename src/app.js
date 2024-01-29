import express from 'express';
import morgan from 'morgan';
//import path from 'path';


import authRoutes from './routes/auth.routes.js';
import bitakoRoutes from './routes/bitako.routes.js';

const app = express();

//const __filename = new URL(import.meta.url).pathname;
//const __dirname = path.dirname(__filename);

// Configurar EJS como motor de vistas
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());

app.use(authRoutes);
app.use(bitakoRoutes);

export default app;